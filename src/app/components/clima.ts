export interface Clima {
  results: {
    city: string,
    time: string,
    condition_code: number,
    description: string,
    currently: string,
    temp: number
  }
}
