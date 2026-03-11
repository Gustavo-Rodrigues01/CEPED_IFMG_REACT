import { useContext } from "react";
import { TasksContext } from "../Context/TasksContext";
import { ProjectContext } from "../Context/ProjectContext";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import WithPremiumAccess from "../hoc/withPremiumAccess";

function DashboardTasksChart() {

  const { tasks } = useContext(TasksContext);
  const { tasksProject } = useContext(ProjectContext);

  // juntar todas as tarefas
  const allTasks = [...tasks, ...tasksProject];

  // calcular completas e incompletas
  const completed = allTasks.filter(task => task.isCompleted).length;
  const incomplete = allTasks.filter(task => !task.isCompleted).length;

  const data = [
    { name: "Completas", value: completed },
    { name: "Incompletas", value: incomplete }
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <div className="flex flex-col items-center dark:text-white">
      
      <h2 className="text-xl font-bold mb-4">
        Status Geral das Tarefas
      </h2>

      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>

    </div>
  );
}

export default WithPremiumAccess(DashboardTasksChart);