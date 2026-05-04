export type ContentType = 'technical-guide' | 'event-coverage' | 'product-guide' | 'industry-news';
export type Region = 'nellore' | 'kakinada' | 'ap-wide';
export type Industry = 'ports-logistics' | 'petrochemical' | 'pharma' | 'power-plants' | 'manufacturing' | 'food-processing';

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorTitle: string;
  publishedAt: string;
  updatedAt?: string;
  region: Region;
  industry: Industry;
  contentType: ContentType;
  keywords: string[];
  featuredImage?: string;
  readingTime: number;
  seoTitle?: string;
  seoDescription?: string;
  relatedArticleIds?: string[];
  cta?: {
    text: string;
    link: string;
    type: 'primary' | 'secondary';
  }[];
}

export const blogArticles: BlogArticle[] = [
  {
    id: 'fall-protection-port-operations',
    title: 'Fall Protection at Krishnapatnam Port: Securing Your Workforce',
    slug: 'fall-protection-krishnapatnam-port',
    excerpt: 'Essential fall protection equipment and safety strategies for container handling and port operations in Nellore.',
    content: `
# Fall Protection at Krishnapatnam Port: Securing Your Workforce

## The Risk Context: Understanding Port Hazards

Krishnapatnam Port, one of India's busiest deep-water ports, handles millions of tons of cargo annually. With extensive container stacking, ship operations, and vessel maintenance, port workers face significant fall hazards that can result in serious injuries or fatalities.

According to OSHA data, fall prevention is critical in maritime operations, where workers regularly work at heights:
- Container stacking at 6-12 meters
- Ship deck operations
- Loading and unloading operations
- Maintenance work on vessels
- Cargo handling in challenging weather conditions

**Why This Matters for Nellore:**
Krishnapatnam Port is a major employer in Nellore district. Safety protocols at the port directly impact regional industrial safety standards and compliance.

## Risk Assessment Framework: Port-Specific Hazards

Before selecting fall protection equipment, conduct a thorough assessment of port operations:

### Height Assessment
- Document all areas where workers operate at heights
- Identify anchor points for equipment attachment
- Evaluate environmental conditions (wind, water spray, weather)

### Activity Classification
- Vessel maintenance and repair
- Cargo loading/unloading
- Container stacking and retrieval
- Surveying and inspection activities
- Emergency response scenarios

### Environmental Factors
- Maritime climate conditions (salt spray, moisture)
- Deck motion and vessel stability
- Seasonal weather patterns in Nellore region
- Night operations and visibility issues

## Fall Protection Solution Options

### 1. Harness Systems for Port Operations
Modern safety harnesses are engineered for maritime environments with:
- Corrosion-resistant components (stainless steel hardware)
- Quick-disconnect systems for rapid response
- Comfortable designs for extended wear during 8-12 hour shifts
- Integrated D-rings for multiple anchor point options

**Best for:** Container operations, vessel maintenance, height work

**Compliance:** OSHA 1926.502, ISO 14119 standards

### 2. Lifeline Systems for Vessel Operations
Permanent or portable lifeline systems allow horizontal mobility across vessel decks:
- Anchored to ship structure with certified attachment points
- Allows workers to move safely during operations
- Suitable for extended duration work
- Reduces fall distances to acceptable limits

**Best for:** Deck operations, cargo handling, maintenance work

### 3. Personal Fall Arrest Systems (PFAS)
Complete systems including harnesses, lanyards, and anchorage:
- Self-retracting lifelines for vertical work
- Shock-absorbing lanyards reduce fall injury
- Energy absorption capacity critical for port environment
- Regular inspection and maintenance schedules

**Best for:** High-risk tasks, emergency response, critical operations

## Implementation at Krishnapatnam Port

### Step 1: Anchor Point Identification
- Certified engineers survey port facilities
- Identify permanent anchor points on vessels and structures
- Install temporary anchor points where needed
- Create anchor point maintenance log

### Step 2: Equipment Selection & Procurement
- Select equipment from certified manufacturers (Udyogi Safety partner brands)
- Ensure all equipment meets OSHA and ISO standards
- Maintain inventory for all port operations areas
- Budget for seasonal replacements and maintenance

### Step 3: Worker Training & Certification
- Conduct initial and ongoing fall protection training
- Certification programs for new employees
- Quarterly refresher training
- Emergency response drills

### Step 4: Program Maintenance
- Monthly equipment inspections
- Quarterly program audits
- Incident investigation and analysis
- Regular communication with workforce

## Key Takeaways

1. **Risk Assessment First:** Every port operation has unique hazards requiring evaluation
2. **Proper Equipment:** Ensure equipment is rated for maritime environments
3. **Training Critical:** Workers must understand equipment use and limitations
4. **Regular Maintenance:** Equipment deteriorates in maritime conditions
5. **Compliance Required:** Follow OSHA and ISO standards for port operations

## Next Steps

- Schedule your port safety audit with our Nellore-based team
- Download our Port Safety Operations Checklist
- Connect with safety experts who understand Krishnapatnam Port operations
    `,
    author: 'Safety Expert Team',
    authorTitle: 'Industrial Safety Consultant - Nellore',
    publishedAt: '2025-01-15',
    region: 'nellore',
    industry: 'ports-logistics',
    contentType: 'technical-guide',
    keywords: ['fall protection', 'port safety', 'Krishnapatnam Port', 'container handling', 'maritime safety'],
    readingTime: 12,
    seoTitle: 'Fall Protection Solutions for Krishnapatnam Port Workers',
    seoDescription: 'Complete guide to fall protection equipment and safety systems for port operations at Krishnapatnam. Protect your workforce with proper PPE and training.',
    cta: [
      {
        text: 'Schedule Port Safety Audit',
        link: '/quote?type=safety-audit&location=nellore',
        type: 'primary'
      },
      {
        text: 'View Fall Protection Equipment',
        link: '/category/fall-protection',
        type: 'secondary'
      }
    ]
  },
  {
    id: 'arc-flash-petrochemical-safety',
    title: 'Arc Flash Protection in Petroleum Refineries: Complete Safety Framework',
    slug: 'arc-flash-petrochemical-kakinada',
    excerpt: 'Essential arc flash PPE and safety protocols for petrochemical workers in Kakinada refineries.',
    content: `
# Arc Flash Protection in Petroleum Refineries

## Understanding Arc Flash Hazards in Kakinada Refineries

Kakinada is home to major petroleum refineries and petrochemical operations where electrical arc flash hazards pose severe risks to worker safety. An arc flash can occur within milliseconds, causing temperatures exceeding 7000°F—hot enough to vaporize copper.

**Kakinada Refinery Context:**
- Multiple HPCL and IOCL refinery operations
- Complex electrical systems controlling process operations
- Equipment maintenance on energized systems
- High-stakes consequences for equipment failure

### The Statistics
- Arc flash incidents result in 5th and 6th degree burns
- 80% of electrical injuries result from arc flash
- Recovery time can exceed months or be permanent
- Regulatory compliance is non-negotiable

## Arc Flash Risk Assessment for Refineries

### Step 1: Identify Energized Equipment
- Electrical panels and switchgear
- Motor control centers (MCCs)
- Power distribution systems
- Backup generators and emergency systems

### Step 2: Determine Arc Flash Boundaries
- Calculate incident energy at each equipment location
- Establish personal protective equipment (PPE) categories
- Document boundaries clearly on equipment
- Update annually or after modifications

### Step 3: Calculate Protection Requirements
- Working distance from electrical equipment
- Duration of exposure
- Equipment voltage and characteristics
- Required PPE category (1-4)

## PPE Categories for Arc Flash Protection

### Category 1 (HRC 1)
- Incident Energy: 1.2 cal/cm²
- Clothing: FR shirt and pants, hard hat
- Use: Low-risk electrical work
- Common in: Distribution equipment areas

### Category 2 (HRC 2)
- Incident Energy: 4.0-8.0 cal/cm²
- Clothing: FR protective coat and hood
- Use: Maintenance of panelboards
- Common in: Control centers

### Category 3 (HRC 3)
- Incident Energy: 25.0-40.0 cal/cm²
- Clothing: Multi-layer FR system, hood, gloves
- Use: Equipment operation and troubleshooting
- Common in: Main distribution equipment

### Category 4 (HRC 4)
- Incident Energy: Greater than 40.0 cal/cm²
- Clothing: Complete protective system (suit, hood, gloves)
- Use: Highest risk electrical work
- Common in: Utility infrastructure

## Implementation in Kakinada Refineries

### Compliance Requirements
- OSHA 1910.333 (electrical safety)
- NFPA 70E (electrical safety standards)
- IEEE 1584 (arc flash study methodology)
- Company-specific protocols

### Training & Certification
- Initial electrical safety training
- Arc flash hazard awareness
- PPE selection and use training
- Emergency response procedures
- Quarterly refresher training

### Equipment & Procurement
- Certified FR clothing from authorized suppliers
- Heat-resistant gloves (leather or composite)
- Face shields and protective eyewear
- Hard hats rated for electrical hazards

## Key Takeaways

1. Arc flash hazards are present in all refinery electrical systems
2. Proper assessment determines required PPE category
3. Training is essential—not optional
4. Equipment must meet OSHA and NFPA standards
5. Regular audits ensure ongoing compliance

## Next Steps

- Get your refinery arc flash study assessment
- View our complete arc flash PPE solution
- Connect with electrical safety experts
    `,
    author: 'Electrical Safety Specialist',
    authorTitle: 'NFPA Certified Consultant - Kakinada',
    publishedAt: '2025-02-10',
    region: 'kakinada',
    industry: 'petrochemical',
    contentType: 'technical-guide',
    keywords: ['arc flash', 'petrochemical safety', 'electrical hazards', 'refinery PPE', 'Kakinada'],
    readingTime: 14,
    seoTitle: 'Arc Flash Protection Guide for Kakinada Petrochemical Workers',
    seoDescription: 'Complete arc flash protection system for petroleum refineries. PPE categories, compliance requirements, and Kakinada-specific solutions.',
    cta: [
      {
        text: 'Schedule Electrical Safety Audit',
        link: '/quote?type=electrical-safety&location=kakinada',
        type: 'primary'
      },
      {
        text: 'View Arc Flash PPE Equipment',
        link: '/category/arc-flash-protection',
        type: 'secondary'
      }
    ]
  }
];

export function getBlogArticles(filters?: {
  region?: Region;
  industry?: Industry;
  contentType?: ContentType;
}): BlogArticle[] {
  let results = [...blogArticles];

  if (filters?.region) {
    results = results.filter(article => article.region === filters.region);
  }

  if (filters?.industry) {
    results = results.filter(article => article.industry === filters.industry);
  }

  if (filters?.contentType) {
    results = results.filter(article => article.contentType === filters.contentType);
  }

  return results.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getBlogArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find(article => article.slug === slug);
}

export function getRelatedArticles(articleId: string, limit: number = 3): BlogArticle[] {
  const article = blogArticles.find(a => a.id === articleId);
  if (!article) return [];

  const related = blogArticles
    .filter(a => a.id !== articleId && (a.region === article.region || a.industry === article.industry))
    .slice(0, limit);

  return related;
}

export function getAllRegions(): Region[] {
  const regions = new Set(blogArticles.map(a => a.region));
  return Array.from(regions) as Region[];
}

export function getAllIndustries(): Industry[] {
  const industries = new Set(blogArticles.map(a => a.industry));
  return Array.from(industries) as Industry[];
}

export function getAllContentTypes(): ContentType[] {
  const types = new Set(blogArticles.map(a => a.contentType));
  return Array.from(types) as ContentType[];
}
