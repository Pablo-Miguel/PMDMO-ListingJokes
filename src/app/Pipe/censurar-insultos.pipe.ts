import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'censurarInsultos'
})
export class CensurarInsultosPipe implements PipeTransform {

  asteriscos: string = "";

  transform(value: String, args: string): String {

    let listaCensura = args.split(",");
    listaCensura.forEach(element => {
      for(let i = 0; i < element.length; i++){
        this.asteriscos += "*";
      }
      value = value.replace(new RegExp(element, "i"), this.asteriscos);
      this.asteriscos = "";
    });
    
    return value;
  }

}
