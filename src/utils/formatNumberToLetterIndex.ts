// form 0 to 999
const formatHundreds = (num: number) => Math.sign(num) * Math.abs(num);

// from 1,000 to 999,999
const formatThousands = (num: number) => {
  const reminder = Math.abs(num) % 1000;
  return (
    Math.sign(num) *
      Number(
        Math.abs(num) > 99999 || !reminder
          ? Math.floor(Math.abs(num) / 1000).toFixed(0)
          : (Math.abs(num) / 1000).toFixed(1),
      ) +
    'k'
  );
};

export const formatNumberToLetterIndex = (num: number) => {
  const absoluteNum = Math.abs(num);

  if (absoluteNum > 999 && absoluteNum < 1000000) {
    return formatThousands(num);
  }
  if (absoluteNum < 1000) {
    return formatHundreds(num);
  }
};
