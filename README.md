# finteh_tinkoff_first_lesson
Задача на экзамене по программированию в финтех

У Кости есть бумажка, на которой написано n чисел. Также у него есть возможность не больше,
чем k раз, взять любое число с бумажки, после чего закрасить одну из старых цифр, а на ее месте
написать новую произвольную цифру.
На какое максимальное значение Костя сможет увеличить сумму всех чисел на листочке?

Формат входных данных
В первой строке даны два целых числа n, k — количество чисел на бумажке и
ограничение на число операций. (1\leq n \leq 10001≤n≤1000, 1 \leq k \leq 10^41≤k≤10^4).
Во второй строке записано n чисел a_i ai — числа на бумажке. (1\leq a_i\leq10^91≤ai≤10^9)

Формат выходных данных
Выведите одно число — максимальную разность между конечной и начальной суммой.

Замечание. В первом примере Костя может изменить две единицы на две девятки, в результате чего сумма чисел увеличится на 16.
Во втором примере Костя меняет число 85 на 95. В третьем примере можно ничего не менять.
Обратите внимание, что ответ может превышать вместимость 32-битного типа данных.

  Пример 1
5 2
1 2 1 3 5
16
Пример 2
3 1
99 5 85
10
Пример 3
1 10
9999
0
