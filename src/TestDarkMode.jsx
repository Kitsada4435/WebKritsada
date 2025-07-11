// src/TestDarkMode.jsx
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

export default function TestDarkMode() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="p-8">
      {/* กล่องทดสอบ 1: ใช้สีมาตรฐาน */}
      <div className="mb-4 p-4 bg-blue-500 dark:bg-red-500 text-white">
        กล่องนี้ต้องเปลี่ยนจากสีน้ำเงิน (Light) เป็นแดง (Dark)
      </div>

      {/* กล่องทดสอบ 2: ใช้สีพื้นหลังและข้อความ */}
      <div className="p-4 bg-white dark:bg-gray-800 text-black dark:text-white">
        <p>Theme ปัจจุบัน: <span className="font-bold">{theme}</span></p>
        <p>ตรวจสอบที่แท็ก {'<html class="...">'} ใน Elements</p>
      </div>
    </div>
  );
}