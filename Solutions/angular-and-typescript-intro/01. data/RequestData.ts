class RequestData {
  response: string;
  fulfilled: boolean;

  constructor(
    public mathod: string,
    public url: string,
    public version: string,
    public message: string,) { 
      
    this.response = undefined
    this.fulfilled = false
    }
}