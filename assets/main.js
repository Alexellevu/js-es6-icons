const icone =[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
		
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	}
];


 document.getElementById('options').addEventListener('click',assegna);
function assegna(){
	var ch = document.getElementById('options').value;
	return ch;
}

var choice = assegna();
console.log(choice);

icone.forEach((element) => {
	

	if(choice === 'all'){
		document.getElementById('container').insertAdjacentHTML('beforeend',`
    <div class="card">
	<i class="fas fa-${element.name}" style="color: ${element.color};"></i>
    <h6>${element.name}</h6>
    </div>
    `)
		
		} else if(choice === 'animal' && element.type == 'animal'){
			document.getElementById('container').insertAdjacentHTML('beforeend',`
			<div class="card">
			<i class="fas fa-${element.name}" style="color: ${element.color};"></i>
			<h6>${element.name}</h6>
			</div>
			`)
					}else if(choice === 'vegetable' && element.type == 'vegetable'){
					document.getElementById('container').insertAdjacentHTML('beforeend',`
					<div class="card">
					<i class="fas fa-${element.name}" style="color: ${element.color};"></i>
				<h6>${element.name}</h6>
				</div>
				`)
					}else if(choice === 'user' && element.type == 'user'){
					document.getElementById('container').insertAdjacentHTML('beforeend',`
					<div class="card">
					<i class="fas fa-${element.name}" style="color: ${element.color};"></i>
					<h6>${element.name}</h6>
					</div>
					`)
	}
	
	
});

