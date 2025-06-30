# API de Cálculo de Boletos com Multa, Juros e Parcelamento

Essa API RESTful foi desenvolvida com **Node.js**, **Express.js** e **TypeScript** para calcular o valor atualizado de um boleto com base em multa por atraso, juros diários e, opcionalmente, parcelamento com acréscimo mensal.

---

## Tecnologias utilizadas:

- Node.js
- Express.js
- TypeScript
- Zod (validação de dados)
- date-fns (manipulação de datas)

---

## Instalação:

### 1. Clone o repositório

```bash
https://github.com/Gabriel-Araujo11/invoice-payment-api
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie a aplicação em modo desenvolvimento

```bash
npm run dev
```

A aplicação será iniciada em: `http://localhost:3000`

---

## Como usar a API:

### Endpoint:
```
POST /api/calculate-bill
```

### Corpo da requisição (JSON):

```json
{
  "amount": 1000,
  "dueDate": "2025-06-10",
  "paymentDate": "2025-06-23",
  "installments": 3
}
```

## Exemplo de resposta (sem parcelamento):

```json
{
  "originalAmount": 1000,
  "daysOverdue": 13,
  "fine": 20,
  "interest": 4.29,
  "updatedAmount": 1024.29
}
```

## Exemplo de resposta (com parcelamento):

```json
{
  "originalAmount": 1000,
  "daysOverdue": 13,
  "fine": 20,
  "interest": 4.29,
  "updatedAmount": 1024.29,
  "installments": 3,
  "installmentInterest": 39.95,
  "totalWithInstallmentInterest": 1064.24,
  "installmentAmount": 354.75
}
```

---

## Exemplo de erro (validação de dados):

```json
{
  "error": [
    {
      "message": "O valor deve ser maior que 0",
      "path": ["amount"]
    },
    {
      "message": "Data de vencimento inválida",
      "path": ["dueDate"]
    }
  ]
}
```

---

Desenvolvido por [Gabriel Araujo](https://www.linkedin.com/in/gabriel-araujo11/)
