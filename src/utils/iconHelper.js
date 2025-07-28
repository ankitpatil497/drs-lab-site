export const getTestIcon = (testName) => {
    const lower = testName.toLowerCase();
    if (lower.includes('blood') || lower.includes('cbc') || lower.includes('fbs') || lower.includes('hba1c')) {
      return 'bi-droplet';
    }
    if (lower.includes('urine')) {
      return 'bi-cup';
    }
    if (lower.includes('vitamin')) {
      return 'bi-capsule';
    }
    if (lower.includes('liver') || lower.includes('sgpt') || lower.includes('bilirubin')) {
      return 'bi-heart-pulse';
    }
    if (lower.includes('lipid') || lower.includes('cholesterol')) {
      return 'bi-speedometer2';
    }
    if (lower.includes('creatinine') || lower.includes('kidney')) {
      return 'bi-droplet-half';
    }
    if (lower.includes('tsh') || lower.includes('t3') || lower.includes('t4')) {
      return 'bi-activity';
    }
    if (lower.includes('hiv') || lower.includes('hbsag')) {
      return 'bi-shield-plus';
    }
    return 'bi-check-circle';
  };
  