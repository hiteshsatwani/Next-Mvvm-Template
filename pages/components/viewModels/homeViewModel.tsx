import {action, computed, makeAutoObservable, observable} from "mobx";

class ViewModel {
  @observable private count = 0;
  private document: Document;

  constructor(document: Document) {
    this.document = document;
    this.document.title = `You clicked ${this.count} times`;
    makeAutoObservable(this);
  }

  @action onClick = (): void => {
    this.count += 1;
    this.document.title = `You clicked ${this.count} times`;
    console.log(true)
  };

  @computed get countLabel(): string {
    console.log(this.count)
    return `You clicked ${this.count} times`;
  }
}

export default ViewModel;