export class Quote {
  showDescription: boolean;
  constructor(public id: number, public name: string, public quoteDetails: string, public completeDate: Date){
        this.showDescription=false;
  }
}
