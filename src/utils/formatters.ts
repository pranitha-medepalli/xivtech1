// Format currency with appropriate decimal places
export const formatCurrency = (amount: number): string => {
  if (amount < 0.01) {
    return '$' + amount.toFixed(6);
  } else if (amount < 1) {
    return '$' + amount.toFixed(4);
  } else if (amount < 1000) {
    return '$' + amount.toFixed(2);
  } else if (amount < 1000000) {
    return '$' + (amount / 1000).toFixed(2) + 'K';
  } else if (amount < 1000000000) {
    return '$' + (amount / 1000000).toFixed(2) + 'M';
  } else if (amount < 1000000000000) {
    return '$' + (amount / 1000000000).toFixed(2) + 'B';
  } else {
    return '$' + (amount / 1000000000000).toFixed(2) + 'T';
  }
};

// Format percentage with appropriate sign and decimal places
export const formatPercentage = (percent: number): string => {
  const sign = percent >= 0 ? '+' : '';
  return sign + percent.toFixed(2) + '%';
};

// Format large numbers with appropriate suffixes
export const formatNumber = (num: number): string => {
  if (num < 1000) {
    return num.toString();
  } else if (num < 1000000) {
    return (num / 1000).toFixed(2) + 'K';
  } else if (num < 1000000000) {
    return (num / 1000000).toFixed(2) + 'M';
  } else if (num < 1000000000000) {
    return (num / 1000000000).toFixed(2) + 'B';
  } else {
    return (num / 1000000000000).toFixed(2) + 'T';
  }
};

// Get appropriate class name for percentage change
export const getPercentageColorClass = (percent: number): string => {
  if (percent > 0) {
    return 'text-green-500';
  } else if (percent < 0) {
    return 'text-red-500';
  } else {
    return 'text-gray-500';
  }
};