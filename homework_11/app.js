var rootNode = document.getElementById("root");

function addChildren(structure) {
    let $ul = document.createElement("ul");

    for (let item of structure) {
        let $li = document.createElement("li")
                
        $li.className = (item.folder) ? "folder" : "file"

        let $div = document.createElement('div')
        $li.appendChild($div)

        let $i = document.createElement("i")
        $i.className = "material-icons"
        
        $i.append((item.folder) ? "folder" : "insert_drive_file")
        $div.appendChild($i)
        
        let $a = document.createElement('a')

        $a.append(item.title)
        $a.setAttribute("href", "#")
        $div.appendChild($a)
        
        $ul.appendChild($li)

        if (item.folder) {
            let $subUl
            
            if (item.children) {
                $subUl = addChildren(item.children)
            } else {
                $subUl = document.createElement('ul')
                let $li = document.createElement('li')
                $subUl.appendChild($li)
                $li.append('Folder is empty')
            }

            $subUl.setAttribute("hidden", "hidden")
            $li.appendChild($subUl)
        }
    }

    return $ul
}

let $structure = addChildren(structure)

document.getElementById("root").addEventListener("click", function(e) {
    if (e.target && e.target.closest("li") && e.target.closest("li").classList.contains('folder')) {
        let $li = e.target.closest(".folder")
        let $i = $li.querySelector('i')
        let $ul = $li.querySelector('ul')

        let isOpened = $li.classList.toggle('open')
        
        $i.textContent = (isOpened) ? "folder_open" : "folder"

        if ($ul) {
            if (isOpened) {
                $ul.removeAttribute("hidden")
            } else {
                $ul.setAttribute("hidden", "hidden")
            }
        }
    }
});

rootNode.appendChild($structure);
