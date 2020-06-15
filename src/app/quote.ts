export class Quote {
  showDescription: boolean;
  upVotes: number = 0;
  downVotes: number = 0;
  constructor(public id: number, public name: string, public quoteDetails: string, public completeDate: Date){
        this.showDescription=false;
  }
}
