import React from "react";

const Hours = () => {
    const shelterHours = [
        { day: "Monday", open: "10:00", close: "16:00" },
        { day: "Tuesday", open: "10:00", close: "16:00" },
        { day: "Wednesday", open: "10:00", close: "16:00" },
        { day: "Thursday", open: "10:00", close: "16:00" },
        { day: "Friday", open: "10:00", close: "16:00" },
        { day: "Saturday", open: "10:00", close: "20:00" },
        { day: "Sunday", open: "10:00", close: "20:00" }
    ];
    // get the long day name and store it in a variable named today
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    // get today's hours
    const hours = shelterHours.find(({ day }) => day === today);
    // display a header of "Today's Hours", and the hours (in a paragraph), inside an div with an id of "hours"
    return (
        <div id="hours">
            <h3>Today's Hours</h3>
            <p>{hours.open} - {hours.close}</p>
        </div>
    );
}

export default Hours;