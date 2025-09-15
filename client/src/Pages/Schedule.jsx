// src/Pages/Schedule.jsx
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Schedule = () => {
  const [schedule, setSchedule] = useState(
    days.reduce((acc, day) => {
      acc[day] = { tasks: [], journal: "" };
      return acc;
    }, {})
  );

  const [activeTask, setActiveTask] = useState(null);

  const addTask = (day) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        tasks: [...prev[day].tasks, { name: "", start: "", end: "", done: false, ratings: null }],
      },
    }));
  };

  const updateTask = (day, index, field, value) => {
    const updatedTasks = [...schedule[day].tasks];
    updatedTasks[index][field] = value;
    setSchedule((prev) => ({ ...prev, [day]: { ...prev[day], tasks: updatedTasks } }));
  };

  const toggleTaskDone = (day, index) => {
    const updatedTasks = [...schedule[day].tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setSchedule((prev) => ({ ...prev, [day]: { ...prev[day], tasks: updatedTasks } }));

    if (updatedTasks[index].done) {
      setActiveTask({ day, index });
    }
  };

  const setRatings = (ratings) => {
    if (!activeTask) return;
    const { day, index } = activeTask;
    const updatedTasks = [...schedule[day].tasks];
    updatedTasks[index].ratings = ratings;
    setSchedule((prev) => ({ ...prev, [day]: { ...prev[day], tasks: updatedTasks } }));
    setActiveTask(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-white text-emerald-900 p-6 overflow-y-auto">
      <h1 className="text-3xl font-extrabold mb-8 text-center tracking-wide">Weekly Schedule</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {days.map((day) => (
          <Card key={day} className="bg-white border border-emerald-200 shadow-md rounded-2xl">
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold text-emerald-700 mb-2">{day}</h2>

              {/* Task List */}
              {schedule[day].tasks.map((task, index) => (
                <div key={index} className="mb-4 p-4 border border-emerald-100 rounded-xl bg-emerald-50 shadow-sm">
                  <Input
                    type="text"
                    placeholder="Task/Event Name"
                    value={task.name}
                    onChange={(e) => updateTask(day, index, "name", e.target.value)}
                    className="mb-2 bg-white text-emerald-900 border-emerald-200"
                  />
                  <div className="flex gap-2 mb-2">
                    <Input
                      type="time"
                      value={task.start}
                      onChange={(e) => updateTask(day, index, "start", e.target.value)}
                      className="flex-1 bg-white border-emerald-200"
                    />
                    <Input
                      type="time"
                      value={task.end}
                      onChange={(e) => updateTask(day, index, "end", e.target.value)}
                      className="flex-1 bg-white border-emerald-200"
                    />
                  </div>

                  {/* Task Completion */}
                  <label className="flex items-center gap-2 text-sm text-emerald-700">
                    <input
                      type="checkbox"
                      checked={task.done}
                      onChange={() => toggleTaskDone(day, index)}
                      className="accent-emerald-600"
                    />
                    Mark as Done
                  </label>

                  {/* Show ratings */}
                  {task.ratings && (
                    <div className="mt-2 text-sm text-emerald-700">
                      ✅ Ratings — Focus: {task.ratings.focus}, Stress: {task.ratings.stress}, Energy:{" "}
                      {task.ratings.energy}
                    </div>
                  )}
                </div>
              ))}

              {/* Add Task Button */}
              <Button
                onClick={() => addTask(day)}
                className="w-full text-sm bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg"
              >
                + Add Task
              </Button>

              {/* Daily Journal */}
              <textarea
                placeholder="Daily Journal..."
                value={schedule[day].journal}
                onChange={(e) =>
                  setSchedule((prev) => ({ ...prev, [day]: { ...prev[day], journal: e.target.value } }))
                }
                className="w-full mt-4 p-3 rounded-lg bg-white border border-emerald-200 text-emerald-900"
              />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Rating Modal */}
      <Dialog open={!!activeTask} onOpenChange={() => setActiveTask(null)}>
        <DialogContent className="bg-white border border-emerald-200 rounded-2xl max-w-md">
          <DialogHeader>
            <DialogTitle className="text-emerald-800 font-bold">Rate Your Task Experience</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <label className="block">
              Focus: <input type="range" min="1" max="10" className="w-full" id="focus" />
            </label>
            <label className="block">
              Stress: <input type="range" min="1" max="10" className="w-full" id="stress" />
            </label>
            <label className="block">
              Energy: <input type="range" min="1" max="10" className="w-full" id="energy" />
            </label>
          </div>
          <DialogFooter>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() =>
                setRatings({
                  focus: document.getElementById("focus").value,
                  stress: document.getElementById("stress").value,
                  energy: document.getElementById("energy").value,
                })
              }
            >
              Save Ratings
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Schedule;
