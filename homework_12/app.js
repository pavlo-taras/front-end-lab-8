const model = {
    currentPerson: {},
    allPersons: [
        {
            name: 'Lily Butler',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/1.jpg'
        }, {
            name: 'Waller Perry',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/1.jpg'
        }, {
            name: 'Tammi Donovan',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/2.jpg'
        }, {
            name: 'Doreen Flowers',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/3.jpg'
        }, {
            name: 'Price Pace',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/4.jpg'
        }, {
            name: 'Larson Maldonado',
            score: 1,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/5.jpg'
        }, {
            name: 'Berg Bolton',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/2.jpg'
        }, {
            name: 'Mack Lott',
            score: 3,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/6.jpg'
        }, {
            name: 'Rosanna Mcleod',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/7.jpg'
        }, {
            name: 'Rosalie Rice',
            score: 1,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/8.jpg'
        }, {
            name: 'Virginia Buchanan',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/3.jpg'
        }, {
            name: 'Lorna Stein',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/9.jpg'
        }, {
            name: 'Rosalie Steele',
            score: 3,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/4.jpg'
        }, {
            name: 'Wilcox Boyd',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/10.jpg'
        }, {
            name: 'Ollie Rice',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/11.jpg'
        }
    ]
};

const control = {
    init: function() {
        listView.init();
        listView.render();

        scoresView.init();
        scoresView.render();

        profileView.init();

        sortView.init();
        sortView.render();
    },
    getAllNames: function() {
        return model.allPersons.map(el=>el.name);
    },
    getAllScores: function() {
        return model.allPersons.map(el=>el.score);
    },
    setCurrentPerson: function(index) {
        model.currentPerson = model.allPersons[index];
        this.viewCurrentProfile();
    },
    getCurrentPerson: function() {
        return model.currentPerson;
    },
    viewCurrentProfile: function() {
        profileView.render();
    },
    setCurrentPersonScore: function(value) {
        model.currentPerson.score = value;
        profileView.render();
        scoresView.render();
        listView.render();
        sortView.removeSortingClasses();
    }
};

const listView = {
    init: function() {
        this.$container = $('.names');
        this.handleClicks();
    },
    render: function() {
        let template = control.getAllNames().reduce((acc, cur, i) => {
            return acc += `<li>${cur}</li>`;
        }, '');
        this.$container.html(template);
    },
    handleClicks: function() {
        this.$container.on('click','li', function(e) {
            let currentIndex = $(e.target).index();
            control.setCurrentPerson(currentIndex);
        });
    }
};

const scoresView = {
    init: function() {
        this.$container = $('.scores');
        this.handleClicks();
    },
    render: function() {
        let template = control.getAllScores().reduce((acc, cur) => {
            return acc += `
                <li>
                    <span>${cur}</span>
                    <input class="hidden score-input" type="text" value="${cur}">
                </li>
            `
        }, '');
        this.$container.html(template);
    },
    handleClicks: function() {
        this.$container.on('click', 'li', function(e) {
            let $currentLi = $(e.target);
            let $currentSpan = $currentLi.find('span');
            let $currentInput = $currentLi.find('input.score-input');
            let currentIndex = $currentLi.index();
            // Hack for sorting
            let currentName = $(listView.$container.find('li')[currentIndex]).text();
            let indexInModel = control.getAllNames().indexOf(currentName);

            if (!$currentInput.is('.hidden')) {
                return false;
            }
            control.setCurrentPerson(indexInModel);
            $currentSpan.addClass('hidden');
            $currentInput.removeClass('hidden').focus();
        });
        this.$container.on('focusout .score-input', function(e) {
            let $currentInput = $(e.target);            
            let $currentLi = $currentInput.parents('li'); 
            let $currentSpan = $currentLi.find('span');
            let newScore = $currentInput.val();
            $currentSpan.removeClass('hidden');
            $currentInput.addClass('hidden');
            control.setCurrentPersonScore(parseInt(newScore));            
        });
    }
};

const profileView = {
    init: function() {
        this.$container = $('.profile');
    },
    render: function() {
        let currentPerson = control.getCurrentPerson();
        let template = `
            <img src="${currentPerson.photoUrl}">
            <h3>${currentPerson.name}</h3>
            <p>Score:${currentPerson.score}</p>
        `
        this.$container.html(template);
    }
};

const sortView = {
    init: function() {
        this.$container = $('.sort-controls');
        this.handleClicks();
    },
    render: function() {
        this.$container.html(
            `<li class="sort-names"><a href="#" class="sort-by sort-by-default">Name</a></li>
            <li class="sort-scores"><a href="#" class="sort-by sort-by-default">Score</a></li>`);
    },
    handleClicks: function() {
        let self = this;

        this.$container.on('click','li a', function(e) {

            let $sortElement = $(e.target);

            let orderUp = $sortElement.hasClass('sort-by-up');

            self.removeSortingClasses();

            $sortElement.addClass((!orderUp) ? 'sort-by-up' : 'sort-by-down');

            let $parentList1 = listView.$container;
            let $parentList2 = scoresView.$container;

            let isInput = $sortElement.parent().hasClass('sort-scores');

            if (isInput) {
                [$parentList1, $parentList2] = [$parentList2, $parentList1]
            }

            self.sortList($parentList1, $parentList2, orderUp, isInput);
        });
    },
    removeSortingClasses: function() {
        this.$container.find('li a').each(function(index, value) {
            $(value).removeClass('sort-by-down').removeClass('sort-by-up').addClass('sort-by-default');
        });
    },
    sortList: function(parent1, parent2, orderUp = true, isInput = true) {
        let listParent1 = parent1.find('li');
    
        let sortedListParent1 = isInput 
            ? this.sortIntegerValue(parent1.children('li'), orderUp)
            : this.sortStringValue(parent1.children('li'), orderUp);
        parent1.append(sortedListParent1);
    
        let listParent2 = parent2.find('li');
        let sortedListParent2 = [];
    
        listParent1.each(function(index, value) {
            sortedListParent2[$(value).index()] = listParent2[index];
        });
    
        parent2.append(sortedListParent2);
    },
    sortStringValue: function(list, orderUp) {
        return list.sort(function(a, b) {
            let vA = $(a).text();
            let vB = $(b).text();
            let result = orderUp 
                ? ((vA < vB) ? -1 : (vA > vB) ? 1 : 0)
                : (vA > vB) ? -1 : (vA < vB) ? 1 : 0;
            return result;
        });
    },
    sortIntegerValue: function(list, orderUp) {
        return list.sort(function(a, b) {
            let vA = parseInt($(a).text());
            let vB = parseInt($(b).text());
            return orderUp ? (vA - vB) : (vB - vA);
        });
    }
};

control.init();