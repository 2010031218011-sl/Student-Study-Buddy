<script>
function addTimetable() {
  const subject = document.getElementById("subject").value.trim();
  const time = document.getElementById("time").value.trim();
  const list = document.getElementById("timetablelist");

  if (!subject || !time) {
    alert("Please enter both subject and time");
    return;
  }

  const item = document.createElement("li");
  item.innerHTML = `<strong>${time}</strong> → ${subject}`;

  list.appendChild(item);

  // clear inputs after generating
  document.getElementById("subject").value = "";
  document.getElementById("time").value = "";
}
</script>

