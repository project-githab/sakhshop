// src/app/pluralize.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize',
  standalone: true
})
export class PluralizePipe implements PipeTransform {

  transform(count: number, one: string, few: string, many: string): string {
    // 1. Проверка на NaN (является ли число некорректным, хотя его тип number)
    if (isNaN(count)) {
      return many;
    }

    // 2. Логика склонения
    const absCount = Math.floor(Math.abs(count));

    // Если 0 или другой невалидный счетчик, можно вернуть 'many'
    if (absCount === 0) {
      return many;
    }

    // Главная логика склонения (зависит от последних двух цифр)
    const count100 = absCount % 100;
    const count10 = absCount % 10;

    // Исключение: числа 11-14 всегда "товаров" (many)
    if (count100 >= 11 && count100 <= 14) {
      return many;
    }

    // Правило 1: оканчивается на 1 -> one
    if (count10 === 1) {
      return one;
    }

    // Правило 2: оканчивается на 2, 3, 4 -> few
    if (count10 >= 2 && count10 <= 4) {
      return few;
    }

    // Правило 3: все остальные -> many
    return many;
  }
}
