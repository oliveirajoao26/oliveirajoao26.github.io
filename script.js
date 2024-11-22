document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Pega os ID dos "elementos"
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    
       // Verificar se todos os campos estão preenchidos
    if (name && email && phone) {
      // Adiciona nova(s) linhas na tabela
      const table = document.getElementById("contactTable").getElementsByTagName("tbody")[0];
      const newRow = table.insertRow();
  
      // Cria e insere as células
      const nameCell = newRow.insertCell(0);
      const emailCell = newRow.insertCell(1);
      const phoneCell = newRow.insertCell(2);
      const actionCell = newRow.insertCell(3);
  
      nameCell.textContent = name;
      emailCell.textContent = email;
      phoneCell.textContent = phone;
  
      // Cria o botão de excluir
      const deleteButton = document.createElement("span");
      deleteButton.className = "action-btn";
      deleteButton.textContent = "Excluir";
      deleteButton.onclick = function () {
        table.deleteRow(newRow.rowIndex - 1); // Remove a linha da tabela
      };
      actionCell.appendChild(deleteButton);
  
      // Limpa o formulário
      document.getElementById("contactForm").reset();
    } else {
      alert("Preencha todos os campos!");
    }
  });
  