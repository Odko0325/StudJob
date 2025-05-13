import React, { useState, useEffect } from 'react';
import StudentHeader from '../../components/StudentHeader';

const CollapsibleSection = ({ title, isOpen, onToggle, children }) => (
  <div className="bg-white border rounded overflow-hidden shadow-sm">
    <div
      className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-gray-50"
      onClick={onToggle}
    >
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <span className="text-xl font-bold">{isOpen ? '-' : '+'}</span>
    </div>
    {isOpen && <div className="px-4 py-4 space-y-4 bg-gray-50">{children}</div>}
  </div>
);

const StudentProfile = () => {
  const [form, setForm] = useState({
    lastName: '',
    firstName: '',
    registerNumber: '',
    birthDate: '',
    email: 'ujin276@gmail.com',
    gender: '',
    phone: '99068246',
    emergencyContact: '',
    country: '',
    address: '',
    aboutMe: '',
    companyName: '',
    position: '',
    isCurrentlyWorking: false,
    startDate: '',
    endDate: '',
    jobDescription: '',
    eduLevel: '',
    eduSchool: '',
    eduMajor: '',
    eduStartDate: '',
    eduEndDate: '',
    isCurrentlyStudying: false,
    languageName: '',
    languageLevel: '',
    skills: ''
  });

  const [openSections, setOpenSections] = useState({
    general: false,
    about: false,
    experience: false,
    education: false,
    languages: false,
    skills: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem('studentProfile');
    if (saved) {
      setForm(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSave = () => {
    localStorage.setItem('studentProfile', JSON.stringify(form));
    alert('Мэдээлэл амжилттай хадгалагдлаа');
  };

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <StudentHeader />

      {/* ✅ CV оруулах болон татах хэсэг */}
      <div className="max-w-4xl mx-auto mt-6 px-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <label
              htmlFor="cvUpload"
              className="flex items-center gap-2 border-2 border-dashed border-gray-400 px-4 py-1.5 rounded-full text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              ⬆️ CV оруулах
            </label>
            <input
              type="file"
              id="cvUpload"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  alert(`"${file.name}" нэртэй CV амжилттай сонгогдлоо.`);
                }
              }}
            />
          </div>
          <button
            onClick={() => window.print()}
            className="bg-purple-700 text-white px-4 py-1.5 rounded-full text-sm hover:bg-purple-800 flex items-center gap-2 shadow"
          >
            ⬇️ CV татах
          </button>
        </div>

        <div className="bg-blue-50 text-blue-800 text-sm px-4 py-3 border border-blue-200 rounded mb-6">
          Та доорх талбаруудыг бөглөхгүйгээр өөрийн CV файлыг оруулаарай.
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Ерөнхий мэдээлэл */}
        <CollapsibleSection
          title="Ерөнхий мэдээлэл"
          isOpen={openSections.general}
          onToggle={() => toggleSection('general')}
        >
          <input name="lastName" placeholder="Овог" value={form.lastName} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          <input name="firstName" placeholder="Нэр" value={form.firstName} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          <input name="registerNumber" placeholder="Регистрийн дугаар" value={form.registerNumber} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          <input name="birthDate" type="date" placeholder="Төрсөн огноо" value={form.birthDate} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          <input name="email" type="email" placeholder="Имэйл" value={form.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          <select name="gender" value={form.gender} onChange={handleChange} className="w-full border rounded px-3 py-2">
            <option value="">Хүйс</option>
            <option value="Эрэгтэй">Эрэгтэй</option>
            <option value="Эмэгтэй">Эмэгтэй</option>
            <option value="Бусад">Бусад</option>
          </select>
          <input name="phone" placeholder="Утасны дугаар" value={form.phone} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          <input name="emergencyContact" placeholder="Яаралтай утас" value={form.emergencyContact} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          <input name="country" placeholder="Улс" value={form.country} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          <input name="address" placeholder="Хаяг" value={form.address} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </CollapsibleSection>

        {/* Миний тухай */}
        <CollapsibleSection
          title="Миний тухай"
          isOpen={openSections.about}
          onToggle={() => toggleSection('about')}
        >
          <textarea name="aboutMe" value={form.aboutMe} onChange={handleChange} className="w-full border rounded px-3 py-2" rows={4} placeholder="Өөрийгөө товч танилцуулна уу" />
        </CollapsibleSection>

        {/* Туршлага */}
        <CollapsibleSection
          title="Туршлага"
          isOpen={openSections.experience}
          onToggle={() => toggleSection('experience')}
        >
          <input name="companyName" placeholder="Компанийн нэр *" value={form.companyName} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          <input name="position" placeholder="Албан тушаал *" value={form.position} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          <div className="flex items-center gap-2">
            <input type="checkbox" id="isCurrentlyWorking" name="isCurrentlyWorking" checked={form.isCurrentlyWorking} onChange={handleChange} />
            <label htmlFor="isCurrentlyWorking">Одоо ажиллаж байгаа</label>
          </div>
          <input name="startDate" type="date" placeholder="Ажилд орсон огноо" value={form.startDate} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          {!form.isCurrentlyWorking && (
            <input name="endDate" type="date" placeholder="Ажлаас гарсан огноо" value={form.endDate} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          )}
          <textarea name="jobDescription" value={form.jobDescription} onChange={handleChange} className="w-full border rounded px-3 py-2" rows={4} placeholder="Хийж гүйцэтгэсэн үүргүүд" />
        </CollapsibleSection>

        {/* Боловсрол */}
        <CollapsibleSection
          title="Боловсрол"
          isOpen={openSections.education}
          onToggle={() => toggleSection('education')}
        >
          <input name="eduLevel" placeholder="Түвшин" value={form.eduLevel} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          <input name="eduSchool" placeholder="Сургуулийн нэр" value={form.eduSchool} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          <input name="eduMajor" placeholder="Мэргэжил" value={form.eduMajor} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          <input name="eduStartDate" type="date" placeholder="Эхэлсэн огноо" value={form.eduStartDate} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          {!form.isCurrentlyStudying && (
            <input name="eduEndDate" type="date" placeholder="Төгссөн огноо" value={form.eduEndDate} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          )}
          <div className="flex items-center gap-2">
            <input type="checkbox" id="isCurrentlyStudying" name="isCurrentlyStudying" checked={form.isCurrentlyStudying} onChange={handleChange} />
            <label htmlFor="isCurrentlyStudying">Одоо сурч байгаа.</label>
          </div>
        </CollapsibleSection>

        {/* Хэл */}
        <CollapsibleSection
          title="Хэл"
          isOpen={openSections.languages}
          onToggle={() => toggleSection('languages')}
        >
          <input name="languageName" placeholder="Хэл *" value={form.languageName} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          <select name="languageLevel" value={form.languageLevel} onChange={handleChange} className="w-full border rounded px-3 py-2">
            <option value="">Түвшин сонгоно уу</option>
            <option value="Анхан шат">Анхан шат</option>
            <option value="Дунд">Дунд</option>
            <option value="Ахисан">Ахисан</option>
          </select>
        </CollapsibleSection>

        {/* Ур чадвар */}
        <CollapsibleSection
          title="Ур чадвар"
          isOpen={openSections.skills}
          onToggle={() => toggleSection('skills')}
        >
          <textarea name="skills" value={form.skills} onChange={handleChange} className="w-full border rounded px-3 py-2" rows={3} placeholder="HTML, CSS, React гэх мэт" />
        </CollapsibleSection>

        <div className="flex justify-end pt-4">
          <button onClick={handleSave} className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800 shadow">
            Хадгалах
          </button>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
