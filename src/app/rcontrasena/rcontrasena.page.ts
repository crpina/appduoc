import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import emailjs from "@emailjs/browser";

@Component({
  selector: 'app-rcontrasena',
  templateUrl: './rcontrasena.page.html',
  styleUrls: ['./rcontrasena.page.scss'],
})
export class RcontrasenaPage{

  form: FormGroup = this.fb.group({
    from_email: '',
    subject: '',
    message: '',
  });

  constructor(private fb: FormBuilder) {
  }

  async send($event: MouseEvent) {
    $event.preventDefault()
    emailjs.init('QpyMnAHf5F5orCEN6');
    let response  = await emailjs.send("service_hc0p41c","template_l2t4fdv",{
      from_email: this.form.value.from_email,
      subject: "Su contraseña es:",
      message: "321",
    });

    alert('El mensaje a sido enviado.');
    this.form.reset();
  }




}
