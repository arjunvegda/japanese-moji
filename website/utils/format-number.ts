type FormatNumberOptions = Parameters<typeof Intl.NumberFormat>[1];

/**
 * Number presets
 */

export const percentPreset: FormatNumberOptions = {
  style: 'unit',
  unit: 'percent',
  maximumFractionDigits: 2,
};

/**
 * Formatters
 */

export const formatNumber = (number: number, opts?: FormatNumberOptions) => {
  const { format } = new Intl.NumberFormat('en', opts);
  return format(number);
};
