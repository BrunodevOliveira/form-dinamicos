import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { DynamicFormConfig } from './dynamic-form/models/dynamic-form-config.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config: DynamicFormConfig[] = [
    {
      type: { field: 'input' },
      label: 'Seu nome',
      name: 'name',
      placeholder: 'Digite seu nome, treinador Pokémon!',
      validation: [Validators.required, Validators.maxLength(30)],
    },
    {
      type: { field: 'input' },
      label: 'Sua idade',
      name: 'age',
      placeholder: '18',
      validation: [
        Validators.required,
        Validators.min(8),
        Validators.max(130),
      ],
    },
    {
      type: { field: 'input' },
      label: 'Sua cidade',
      name: 'city',
      placeholder: 'Pallet',
      validation: [Validators.required, Validators.maxLength(20)],
    },
    {
      type: { field: 'select' },
      label: 'Escolha seu Pokémon inicial',
      name: 'initialPokemon',
      options: ['Bulbasaur', 'Charmander', 'Squirtle'],
      validation: [Validators.required],
    },
  ];

  save(event: any) {
    console.log(event)

  }
}
