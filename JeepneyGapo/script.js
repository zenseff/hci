function openYellowModal() {
      document.getElementById('yellowModal').classList.add('show');
    }
    function closeYellowModal() {
      document.getElementById('yellowModal').classList.remove('show');
    }

    function openBeigeModal() {
      document.getElementById('beigeModal').classList.add('show');
    }
    function closeBeigeModal() {
      document.getElementById('beigeModal').classList.remove('show');
    }

    let activeRow = null;

    function updateSidebar(name) {
        document.getElementById('driver-name').innerText = name;
        if (name === 'Eizen Joeseff Rodriguez') {
            document.getElementById('body-no').innerText = 'J02 098';
            document.getElementById('plate-no').innerText = 'CVD 686';
            document.getElementById('contact').innerText = '0912-345-6789';
        } else if (name === 'Mark Joseph Ardenio') {
            document.getElementById('body-no').innerText = 'J02 098';
            document.getElementById('plate-no').innerText = 'CVD 686';
            document.getElementById('contact').innerText = '0912-345-6789';
        }
    }

    function selectRow(cell, name) {
        if (activeRow) {
            activeRow.classList.remove('active-row');
        }
        const row = cell.parentNode;
        activeRow = row;
        row.classList.add('active-row');
        updateSidebar(name);
        toggleSidebar();
    }

    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const container = document.getElementById('container');
        
        sidebar.classList.toggle('show');
        container.style.transform = sidebar.classList.contains('show') ? 'translateX(200px)' : 'translateX(0)';
        if (!sidebar.classList.contains('show') && activeRow) {
            activeRow.classList.remove('active-row'); activeRow = null;
        }
    }