import inquirer from "inquirer";

class Student {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}

class Person {
  students: Student[] = [];
  addStudent(obj: Student) {
    this.students.push(obj);
  }
}

const persons = new Person();

const programStart = async (persons: Person) => {
    do{
  console.log("Welcome");
  const ans = await inquirer.prompt([
    {
      name: "select",
      type: "list",
      message: "whom would you like to interact with?",
      choices: ["Staff", "Student", "Exit"],
    },
  ]);
  if (ans.select == "Staff") {
    console.log(
      "You Approach The Staff Room. Please Feel Free To Ask Any Question."
    );
  } else if (ans.select == "Student") {
    const ans = await inquirer.prompt({
      name: "student",
      type: "input",
      message: "Enter The Student's Name You Wish To Engage With:",
    });
    const student = persons.students.find((val) => val.name == ans.student);
    if (!student) {
      const name = new Student(ans.student);
      persons.addStudent(name);
      console.log(`Hellow i am ${name.name}. Nice To Meet You!`);
      console.log("New Student Added");
      console.log("Current Student List");
      console.log(persons.students);
    } else {
      console.log(`Hellow i am ${Student.name}. Nice To See You Again!`);
      console.log("Existing Student List");
      console.log(persons.students);
    }
  }else if (ans.select == "Exit"){
    console.log("Exiting The Program ....");
    process.exit()
  }
}while(true)
};

programStart(persons)
