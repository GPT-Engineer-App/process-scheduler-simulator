# process-scheduler-simulator

Разработка имитатора планировщика процессов ОС
Необходимо на любом доступном языке программирования написать программу – 
эмулятор планировщика процессов операционной системы. Программа должна 
содержать следующие элементы интерфейса пользователя:
– окно с программами (имитация exe-файлов)
– окно с процессами (имитация процессов, должно отражать системный контекст 
процесса)
– окно с ресурсами вычислительной системы (имитация устройств компьютера)
– кнопку timer, при нажатии происходит имитация прерывания таймера.
В программе должна быть предусмотрена возможность "создания" процессов и 
задание необходимых им ресурсов, которые должны распределяться и 
планироваться в зависимости от выбранного механизма планирования.
Далее необходимо в соответствии со своим вариантом реализовать механизм 
планирования процессов.
Далее необходимо разработать набор тестов демонстрирующих пре-имущества и 
недостатки вашего алгоритма планирования. Например, для алгоритма 
приоритетного планирования со статическими приоритетами должна тестироваться 
ситуация, когда процесс с низким приоритетом долгое время не может перейти в 
состояние «исполнение».
1) FCFS (FIFO)
2) RR
3) SJF
4) Гарантированное планирование
5) Приоритетное планирование со статическими приоритетами
6) Приоритетное планирование с динамическими приоритетами
7) MQ (Многоуровневые очереди)
8) MFQ (Многоуровневые очереди с обратной связью)
9) MFQ (Многоуровневые очереди с обратной связью)

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/process-scheduler-simulator.git
cd process-scheduler-simulator
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
