export class Quote {
  showDescription: boolean;
  constructor(public id: number, public name: string, public quoteDetails: string, public completeDate: Date, public upVotes: number = 0, public downVotes: number = 0){
        this.showDescription=false;
  }
}
