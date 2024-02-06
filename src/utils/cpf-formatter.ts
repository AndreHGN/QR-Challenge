export const formatCpf = (cpfValue: string) => {
  const rawCpf = cpfValue.replace(/\D/g, '').slice(0, 11);

  const digitLength = rawCpf.length;

  if (3 < digitLength && digitLength <= 6) {
    return rawCpf.replace(/(\d{3})(\d{1,3})/g, '$1.$2');
  } else if (6 < digitLength && digitLength <= 9) {
    return rawCpf.replace(/(\d{3})(\d{3})(\d{1,3})/g, '$1.$2.$3');
  } else if (9 < digitLength && digitLength <= 14) {
    return rawCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2}.*)/g, '$1.$2.$3-$4');
  } else {
    return rawCpf;
  }
};
