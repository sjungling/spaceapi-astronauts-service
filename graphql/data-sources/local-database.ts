/* eslint-disable @typescript-eslint/no-explicit-any */
import { SQLDataSource } from "datasource-sql";

export default class LocalDatabase extends SQLDataSource {
  knex: any;
  constructor(config: any) {
    super(config);
  }
  getAstronauts() {
    return this.knex.select("*").from("crew");
  }
  getAstronautById(astronaut_id: number) {
    return this.knex
      .select("*")
      .from("crew")
      .where({ id: astronaut_id })
      .limit(1);
  }
}
