// =============================
// Dashboard Statistics
// =============================

const dashboardData = {
    running: 4,
    stopped: 1,
    eventsIn: 15240,
    eventsOut: 15192,
    throughput: 185
};

// Update statistic cards
document.getElementById("runningPipelines").textContent = dashboardData.running;
document.getElementById("stoppedPipelines").textContent = dashboardData.stopped;
document.getElementById("eventsReceived").textContent = dashboardData.eventsIn.toLocaleString();
document.getElementById("eventsProcessed").textContent = dashboardData.eventsOut.toLocaleString();
document.getElementById("throughput").textContent = dashboardData.throughput + " events/sec";

// =============================
// Pipeline Table
// =============================

const pipelines = [
    {
        name: "Pipeline-01",
        status: "Running",
        in: 5200,
        out: 5195,
        health: "Healthy"
    },
    {
        name: "Pipeline-02",
        status: "Running",
        in: 4300,
        out: 4298,
        health: "Healthy"
    },
    {
        name: "Pipeline-03",
        status: "Stopped",
        in: 3100,
        out: 3000,
        health: "Critical"
    },
    {
        name: "Pipeline-04",
        status: "Running",
        in: 2640,
        out: 2639,
        health: "Healthy"
    }
];

const tableBody = document.getElementById("pipelineTable");

pipelines.forEach(pipeline => {

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${pipeline.name}</td>
        <td>
<span class="${
pipeline.status === "Running"
?
"running"
:
"stopped"
}">
${pipeline.status}
</span>
</td>
        <td>${pipeline.in.toLocaleString()}</td>
        <td>${pipeline.out.toLocaleString()}</td>
        <td>${pipeline.health}</td>
    `;

    tableBody.appendChild(row);

});

// =============================
// Alerts
// =============================

const alerts = [
    "Pipeline-03 has stopped.",
    "High throughput detected on Pipeline-01.",
    "Pipeline-02 queue is normal."
];

const alertList = document.getElementById("alertList");

alerts.forEach(alert => {

    const li = document.createElement("li");

    li.textContent = alert;

    alertList.appendChild(li);

});

// =============================
// Refresh Button
// =============================

document.getElementById("refreshBtn").addEventListener("click", () => {

    alert("Dashboard refreshed (demo)");

});

// =============================
// LIVE CLOCK
// =============================

function updateClock(){

    const now = new Date();

    document.getElementById("liveClock").textContent =
        now.toLocaleString();

}

updateClock();

setInterval(updateClock,1000);
// =============================
// SEARCH PIPELINES
// =============================

const searchInput = document.getElementById("searchPipeline");

searchInput.addEventListener("keyup", function () {

    const searchValue = this.value.toLowerCase();

    const rows = document.querySelectorAll("#pipelineTable tr");

    rows.forEach(row => {

        const pipelineName =
            row.children[0].textContent.toLowerCase();

        if (pipelineName.includes(searchValue)) {

            row.style.display = "";

        }

        else{

            row.style.display = "none";

        }

    });

});

// =============================
// FILTER PIPELINES
// =============================

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", function(){

        const filter = this.dataset.filter;

        const rows = document.querySelectorAll("#pipelineTable tr");

        rows.forEach(row=>{

            const status =
                row.children[1].textContent.trim();

            if(filter==="All"){

                row.style.display="";

            }

            else if(status===filter){

                row.style.display="";

            }

            else{

                row.style.display="none";

            }

        });

    });

});
