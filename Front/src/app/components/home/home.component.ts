import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hayono(cadena)
  {
    
    var l = cadena.length
    for(var i= 0; i<l; i ++)
    {
      if( cadena.charAt(i) !== cadena.charAt(l-1-i))
        {
            console.log('the Word is not palindrome.');
            document.getElementById('textocambio').innerText="the Word is not palindrome"
        }else{
            console.log('the Word is  palindrome!');
            document.getElementById('textocambio').innerText="the Word is  palindrome"
        }
    }
  }

}
