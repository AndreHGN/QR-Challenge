export const isCpfValid = (cpf?: string) => {
  if (!cpf) {
    return true;
  }
  const cpfDigits = [...cpf.replace(/\D/g, '')];

  if (cpfDigits.length !== 11) {
    return false;
  }

  const firstDigit = calculateDigit(cpfDigits, 'first');

  if (firstDigit !== cpfDigits[9]) {
    return false;
  }

  const secondDigit = calculateDigit(cpfDigits, 'second');

  if (secondDigit !== cpfDigits[10]) {
    return false;
  }

  return true;
};

const calculateDigit = (
  cpfDigits: string[],
  digitOrder: 'first' | 'second',
): string => {
  const lastIndex = digitOrder == 'first' ? 9 : 10;
  const startMultiplicationIndex = digitOrder == 'first' ? 10 : 11;

  const sum = cpfDigits
    .slice(0, lastIndex)
    .reduce((acc, currentValue, index) => {
      return (acc +=
        parseInt(currentValue) * (startMultiplicationIndex - index));
    }, 0);

  const digitModule = (sum * 10) % 11;
  return digitModule < 10 ? digitModule.toString() : '0';
};
