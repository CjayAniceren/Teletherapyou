// Store journal entries
const journalEntries = [];
let currentDate = new Date();

// Ensure the calendar is rendered on page load
window.onload = function() {
  // Fix: Ensure currentDate is initialized as today's date properly
  currentDate = new Date();
  
  // Fix: Make sure calendar renders on page load
  renderCalendar();
  displayRecentEntries();
  
  // Set default date in the form to today
  document.getElementById('entry-date').valueAsDate = new Date();
};

// Function to render the calendar
function renderCalendar() {
  const calendarGrid = document.getElementById('calendar-grid');
  const calendarDays = document.getElementById('calendar-days');
  calendarGrid.innerHTML = ''; // Clear current calendar content
  calendarDays.innerHTML = ''; // Clear days of week header

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const today = new Date().toDateString();  // Set today's date

  // Set the calendar header to display current month, year
  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();
  document.getElementById('calendar-title').innerText = `${monthName} ${year}`;

  // Show the current day and date at the top
  displayCurrentDay();

  // Days of the week header
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysOfWeek.forEach((day) => {
    const dayElement = document.createElement('div');
    dayElement.innerText = day;
    calendarDays.appendChild(dayElement);
  });

  // Calculate number of blank days before the first of the month
  const blankDays = firstDayOfMonth.getDay();

  // Fill in blank days
  for (let i = 0; i < blankDays; i++) {
    const blankDiv = document.createElement('div');
    blankDiv.classList.add('calendar-day');
    calendarGrid.appendChild(blankDiv);
  }


// Fill in actual days of the month
for (let day = firstDayOfMonth; day <= lastDayOfMonth; day.setDate(day.getDate() + 1)) {
    const currentDay = day.toLocaleDateString('default', {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
    });
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('calendar-day');
    dayDiv.innerText = day.getDate(); // Display the day number
  
    // Highlight today's date
    if (day.toDateString() === today) {
      dayDiv.classList.add('highlight');
    }
  
    // Check if there's a journal entry for this day and color accordingly
    const entry = journalEntries.find((e) => e.date === currentDay);
    if (entry) {
      dayDiv.style.backgroundColor = moodToColor(entry.mood); // Set mood color
    } else {
      dayDiv.style.backgroundColor = ''; // Reset background color if no entry
    }
  
    // Add click event to show journal entry for that day
    dayDiv.onclick = () => showJournalEntry(currentDay);
  
    // Append the day div to the calendar grid
    calendarGrid.appendChild(dayDiv);
  }
}

// Function to display the current day and date
function displayCurrentDay() {
    const today = new Date();
    const currentDay = today.toLocaleDateString('default', {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
    });
    document.getElementById('current-date').innerText = currentDay;
  }

// Function to change the month and re-render the calendar
function changeMonth(offset) {
  currentDate.setMonth(currentDate.getMonth() + offset);
  renderCalendar();
  displayRecentEntries();
}

// Helper function to convert mood to color
function moodToColor(mood) {
  switch(mood) {
    case 'happy': return '#FFD700';  // Gold
    case 'sad': return '#1E90FF';    // DodgerBlue
    case 'neutral': return '#D3D3D3'; // LightGray
    default: return '#FFF';           // Default white background
  }
}

// Function to add a journal entry
function addJournalEntry() {
    const journalText = document.getElementById('journalText').value;
    const mood = document.getElementById('mood').value;
    const date = new Date(document.getElementById('entry-date').value);
    const dateStr = date.toLocaleDateString('default', {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
    });
  
    if (journalText === '' || mood === '' || isNaN(date)) {
      alert('Please fill out the journal, mood, and valid date!');
      return;
    }
  
    // Store the entry
    journalEntries.push({
      date: dateStr,
      journalText,
      mood,
    });
  
    // Clear the form
    document.getElementById('journalText').value = '';
    document.getElementById('mood').value = '';
    document.getElementById('entry-date').valueAsDate = new Date(); // Reset to today
  
    // Re-render the calendar and update recent entries
    renderCalendar();
    displayRecentEntries();
}

// Function to display recent journal entries
function displayRecentEntries() {
  const recentEntriesDiv = document.getElementById('entries-list');
  recentEntriesDiv.innerHTML = ''; // Clear existing entries

  // Sort entries by date and get the last three
  const sortedEntries = journalEntries
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  sortedEntries.forEach((entry) => {
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('entry-item');
    const entryDate = new Date(entry.date).toLocaleDateString('default', {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
    });

    entryDiv.innerHTML = `<strong>${entryDate}</strong> - Mood: ${entry.mood} <br> ${entry.journalText}`;
    recentEntriesDiv.appendChild(entryDiv);
  });
}

// Function to show journal entry when a day is clicked
function showJournalEntry(day) {
    const entry = journalEntries.find((e) => e.date === day);
    const modal = document.getElementById('journal-modal');
  
    // Show the modal and populate it with the entry's details
    modal.style.display = 'block';
    document.getElementById('modal-date').innerText = day;
  
    if (entry) {
      document.getElementById('modal-entry').innerText = entry.journalText;
      document.getElementById('modal-mood').innerText = `Mood: ${entry.mood}`;
    } else {
      document.getElementById('modal-entry').innerText = 'No entry for this day.';
      document.getElementById('modal-mood').innerText = '';
    }
  
    // Attach event listener to close button
    document.querySelector('.close').addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }

// Function to toggle the display of the journal entry form
function toggleEntryForm() {
  const entryForm = document.getElementById('journal-entry-form');
  entryForm.classList.toggle('hidden'); // Toggle visibility
}
