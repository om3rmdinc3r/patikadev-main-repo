const fs = require("fs");

const createEmployee = (data) => {
  fs.writeFileSync("employees.json", JSON.stringify(data, null, 2));
  console.log("Veri başarıyla oluşturuldu.");
};

const readEmployee = () => {
  try {
    const data = fs.readFileSync("employees.json", "utf-8");
    const employee = JSON.parse(data);
    console.log("Okunan veri:", employee);
    return employee;
  } catch (error) {
    console.error("Dosya okuma hatası:", error.message);
    return null;
  }
};

const updateEmployee = (newData) => {
  try {
    const currentData = readEmployee();
    if (currentData) {
      const updatedData = { ...currentData, ...newData };
      fs.writeFileSync("employees.json", JSON.stringify(updatedData, null, 2));
      console.log("Veri başarıyla güncellendi.");
    }
  } catch (error) {
    console.error("Dosya güncelleme hatası:", error.message);
  }
};

const deleteEmployeeFile = () => {
  try {
    fs.unlinkSync("employees.json");
    console.log("Dosya başarıyla silindi.");
  } catch (error) {
    console.error("Dosya silme hatası:", error.message);
  }
};

createEmployee({
  name: "Employee 1 Name",
  salary: 2000,
});

const employeeData = readEmployee();

if (employeeData) {
  updateEmployee({
    salary: 2500,
  });
}

deleteEmployeeFile();
