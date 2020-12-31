import { Astronaut, NotFound, Resolvers } from "../../@types/resolvers";
export const formatAstronaut = (result: any): Astronaut => ({
  id: result.id,
  firstName: result.first_name,
  lastName: result.last_name,
});

export const resolvers: Resolvers = {
  /**
   * Query-Resolvers for the `Mission` schema package
   */
  Query: {
    astronauts: async (_root, _args, { dataSources }) => {
      /**
       * Awaiting promise resolution from Knex
       */
      const results = await dataSources.db.getAstronauts();
      /**
       * Iterate through database results and format column names to schema
       */
      const response = results.map((result) => formatAstronaut(result));
      return response;
    },
    astronaut: async (_root, args, { dataSources }) => {
      const results = await dataSources.db.getAstronautById(args.id);

      let response;
      if (results.length > 0) {
        response = formatAstronaut(results[0]);
      } else {
        response = {
          message: `Couldn't find that steely-eyed missile man you seek.`,
        };
      }
      return response;
    },
  },
  AstronautResult: {
    __resolveType: (obj) => {
      if ((obj as NotFound)?.message) {
        return "NotFound";
      } else {
        return "Astronaut";
      }
    },
  },
};
