// Generate FAQPage JSON-LD schema for product categories
// Schema is invisible to visitors but readable by Google for local SEO

const CITIES = [
  'Visakhapatnam',
  'Vijayawada',
  'Hyderabad',
  'Guntur',
  'Tirupati',
  'Rajahmundry',
  'Warangal',
  'Ongole',
  'Kadapa',
  'Kurnool',
  'Kakinada',
  'Nellore',
]

const CITY_BRANCHES: Record<string, { branch: string; phone: string; days: string }> = {
  'Visakhapatnam': { branch: 'Kakinada', phone: '+91 77309 40410', days: '3-5 business days' },
  'Vijayawada': { branch: 'Nellore', phone: '+91 9398644987', days: '3-5 business days' },
  'Hyderabad': { branch: 'N/A', phone: '+91 9398644987', days: '5-7 business days' },
  'Guntur': { branch: 'Nellore', phone: '+91 9398644987', days: '2-3 business days' },
  'Tirupati': { branch: 'Nellore', phone: '+91 9398644987', days: 'variable' },
  'Rajahmundry': { branch: 'Kakinada', phone: '+91 77309 40410', days: '1-2 business days' },
  'Warangal': { branch: 'N/A', phone: '+91 9398644987', days: '5-7 business days' },
  'Ongole': { branch: 'Nellore', phone: '+91 9398644987', days: '1-2 business days' },
  'Kadapa': { branch: 'Nellore', phone: '+91 9398644987', days: 'variable' },
  'Kurnool': { branch: 'Nellore', phone: '+91 9398644987', days: 'variable' },
  'Kakinada': { branch: 'Kakinada', phone: '+91 77309 40410', days: '1-2 business days' },
  'Nellore': { branch: 'Nellore', phone: '+91 9398644987', days: '1-2 business days' },
}

const CATEGORY_ISO_STANDARDS: Record<string, string> = {
  'foot-protection': 'IS 15298',
  'head-protection': 'IS 2925',
  'fall-protection': 'IS 3521',
  'eye-protection': 'IS 5983',
  'respiratory-protection': 'IS 9623',
  'hand-protection': 'IS 4770',
  'hearing-protection': 'IS 7655',
  'workwear': 'IS 15809',
  'electrical-safety': 'IS 1863',
  'arc-heat-protection': 'IS 4151',
  'workplace-safety': 'IS 9614',
  'emergency-safety': 'IS 5571',
  'sgbi': 'IS 10169',
  'lanyard': 'IS 3521',
  'anchorage-sling': 'IS 3521',
}

const PRODUCT_NAMES: Record<string, string> = {
  'foot-protection': 'safety shoes',
  'head-protection': 'safety helmets',
  'fall-protection': 'safety harnesses',
  'hand-protection': 'safety gloves',
  'respiratory-protection': 'respirators and masks',
  'eye-protection': 'safety goggles and face shields',
  'workwear': 'protective workwear and FR clothing',
  'hearing-protection': 'ear protection and earmuffs',
  'electrical-safety': 'electrical safety equipment',
  'arc-heat-protection': 'arc flash and heat protection',
  'workplace-safety': 'workplace safety solutions',
  'emergency-safety': 'emergency eyewash and safety showers',
  'sgbi': 'gas detection and breathing apparatus',
  'lanyard': 'safety lanyards',
  'anchorage-sling': 'safety anchorage and slings',
  'face-protection': 'face protection equipment',
}

interface Question {
  '@type': string
  name: string
  acceptedAnswer: {
    '@type': string
    text: string
  }
}

export function generateFAQPageSchema(categorySlug: string): string {
  const productName = PRODUCT_NAMES[categorySlug] || 'products'
  const isoStandard = CATEGORY_ISO_STANDARDS[categorySlug] || 'IS 4151'

  const mainEntity: Question[] = CITIES.map((city) => {
    const cityInfo = CITY_BRANCHES[city]
    const branchInfo = cityInfo.branch !== 'N/A' ? ` from our ${cityInfo.branch} branch` : ''
    const daysInfo = cityInfo.days !== 'variable' ? ` within ${cityInfo.days}` : ''

    const answerText = `Yes, PND Industrial Suppliers supplies ${isoStandard} certified ${productName} to ${city}${branchInfo}${daysInfo}. Call ${cityInfo.phone} for bulk pricing.`

    return {
      '@type': 'Question',
      name: `Do you supply ${productName} in ${city}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answerText,
      },
    }
  })

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  }

  return JSON.stringify(faqSchema)
}
