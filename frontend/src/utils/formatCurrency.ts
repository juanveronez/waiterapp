export function formatCurrency(value: number) {
  const { format } = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return format(value);
}
