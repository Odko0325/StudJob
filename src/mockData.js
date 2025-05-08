export const mockJobs = [
  {
    id: 1,
    title: "Кассчин",
    company: "Supermart ХХК",
    description: "Касс дээр ажиллах тууштай ажилтан авна. Ээлжийн хуваарьтай.",
    category: "part-time",
    location: "Баянзүрх дүүрэг",
    salary: "1,200,000₮/сар",
    postedDate: "3 өдрийн өмнө",
    requirements: ["Хариуцлагатай", "Нягт нямбай"],
    companyLogo: "https://via.placeholder.com/60"
  },
  {
    id: 2,
    title: "Кафегийн үйлчлэгч",
    company: "Coffee Time",
    description: `Цагийн ажилчдыг шуурхай ажилд авна.
18-35 насны эрэгтэй, эмэгтэй. Харилцааны соёлтой, цэвэрч нямбай.`,
    category: "part-time",
    location: "Сүхбаатар дүүрэг",
    salary: "8,000₮/цаг",
    postedDate: "1 өдрийн өмнө",
    requirements: ["Харилцааны чадвар"],
    companyLogo: "https://via.placeholder.com/60"
  },
  {
    id: 3,
    title: "UI/UX дизайнер (дадлага)",
    company: "TechVerse",
    description: "Оюутан дадлагын дизайнер авна. Figma дээр ажилладаг бол давуу тал.",
    category: "internship",
    location: "Хан-Уул дүүрэг",
    salary: "Урамшуулалтай",
    postedDate: "Өчигдөр",
    requirements: ["Figma", "Дизайны сонирхолтой байх"],
    companyLogo: "https://via.placeholder.com/60"
  },
  {
    id: 4,
    title: "Хүний нөөцийн мэргэжилтэн",
    company: "BizConsult",
    description: "Туршлагатай хүний нөөцийн мэргэжилтэн авна. CV илгээнэ үү.",
    category: "professional",
    location: "Чингэлтэй дүүрэг",
    salary: "2,000,000₮/сар",
    postedDate: "2 өдрийн өмнө",
    requirements: ["HR туршлага", "Их дээд сургууль төгссөн байх"],
    companyLogo: "https://via.placeholder.com/60"
  },
  
  {
    id: 6,
    title: "React хөгжүүлэгч (дадлага)",
    company: "CodeFoundry",
    description: "React мэддэг, оюутан хөгжүүлэгч дадлагад авна.",
    category: "internship",
    location: "Сонгинохайрхан дүүрэг",
    salary: "Урамшуулал",
    postedDate: "Өнөөдөр",
    requirements: ["React", "Git мэдлэгтэй байх"],
    companyLogo: "https://via.placeholder.com/60"
  },
  
  {
    id: 8,
    title: "Програм хангамжийн инженер",
    company: "Innotech LLC",
    description: "Node.js болон MongoDB дээр ажиллаж байсан туршлагатай инженер авна.",
    category: "professional",
    location: "Сүхбаатар дүүрэг",
    salary: "3,500,000₮/сар",
    postedDate: "3 өдрийн өмнө",
    requirements: ["Node.js", "MongoDB", "REST API"],
    companyLogo: "https://via.placeholder.com/60"
  },
  
  
];
export const mockEvents = [
  {
    id: 1,
    title: "Хаан банк цалинтай дадлага танилцуулах өдөрлөг",
    date: "2025.02.09",
    location: "One Event Hall",
    image: "https://via.placeholder.com/300x180.png?text=Хаан+банк",
    description: `Цахим банкаар тэргүүлэгч ХААН Банк мэдээллийн технологийн чиглэлээр суралцаж буй оюутнуудад зориулан “Цалинтай дадлагын хөтөлбөр”-өө ээлжит удаагаа зарлаж, энэ өдөрлөгөөр хөтөлбөрийн агуулга, шалгуур, анхаарах зүйлсийн талаар дэлгэрэнгүй мэдээлэл өгөх юм. 
Хөтөлбөрийн хүрээнд оюутнууд олон улсын түвшний мэргэжилтнүүдээс суралцаж, бодит төсөл дээр ажиллах боломжтой болно.`
  },
  {
    id: 2,
    title: "MCS цалинтай дадлага танилцуулах өдөрлөг",
    date: "2025.02.09",
    location: "One Event Hall",
    image: "https://via.placeholder.com/300x180.png?text=MCS+Internship",
    description: `MCS группын зүгээс жил бүр зохион байгуулдаг “Цалинтай дадлагын хөтөлбөр”-ийн танилцуулах өдөрлөг энэ жил улам өргөн цар хүрээтэй болно. Дадлагад хамрагдсанаар технологи, инженерчлэл, санхүүгийн салбарт олон төсөлд оролцох боломжтой бөгөөд шилдэг оюутнуудыг ажилд авах төлөвлөгөөтэй байна.`
  },
  {
    id: 3,
    title: "Хаан банк шинэ оюутны хөтөлбөр",
    date: "2025.02.09",
    location: "One Event Hall",
    image: "https://via.placeholder.com/300x180.png?text=RISE+Program",
    description: `ХААН Банкны шинэ оюутны хөтөлбөр "RISE" нь 2–4-р курсын оюутнуудад зориулсан бөгөөд программ хангамж, дата шинжилгээ, банкны бүтээгдэхүүн хөгжүүлэлт зэрэг чиглэлд дадлага хийх боломжийг олгодог. Энэ өдөрлөгөөр оролцогчид мэргэжилтнүүдээс шууд мэдээлэл авч, өргөдлөө өгөх боломжтой.`
  }
];
