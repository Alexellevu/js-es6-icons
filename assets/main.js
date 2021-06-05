const icone =[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];




icone.forEach((element, index) => {
	var choice = document.getElementById('options').value;
	console.log(choice);

	if(choice === 'all'){
		document.getElementById('container').insertAdjacentHTML('beforeend',`
    <div class="card">
	<i class="fas fa-${element.name}" style="color: #4545F7;"></i>
    <h6>${element.name}</h6>
    </div>
    `)
		
	} 
	
	
   /*  if(element.name === 'cat'){
    document.getElementById('container').insertAdjacentHTML('beforeend',`
    <div class="card">
	<i class="fas fa-cat" style="color: #4545F7;"></i>
    <h6>${element.name}</h6>
    </div>
    `)
    }else if(element.name === 'crow'){
        document.getElementById('container').insertAdjacentHTML('beforeend',`
        <div class="card">
        <i class="fas fa-crow" style="color: #4545F7;"></i>
        <h6>${element.name}</h6>
        </div>
        `)
    }else if(element.name === 'carrot'){
        document.getElementById('container').insertAdjacentHTML('beforeend',`
        <div class="card">
        <i class="fas fa-carrot" style="color:#F7B845"></i>
        <h6>${element.name}</h6>
        </div>
        `)
    }else if(element.name === 'user-astronaut'){
        document.getElementById('container').insertAdjacentHTML('beforeend',`
        <div class="card">
        <i class="fas fa-user-astronaut" style="color:#9F459F"></i>
        <h6>${element.name}</h6>
        </div>
        `) 
    }*/
});

