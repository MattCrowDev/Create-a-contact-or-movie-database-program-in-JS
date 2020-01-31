
var FIDH = 
[
	{
		name: 'Carl',
		value: '$40',
        defFeature: 'blue eyes',
        stillfriends: false
    },
    {
		name: 'David',
		value: '$10',
        defFeature: 'tall',
        stillfriends: false
    },
    {
		name: 'Charlie',
		value: '$100',
        defFeature: 'colored hair',
        stillfriends: true
    },
    {
		name: 'Merrick',
		value: '$0.02',
        defFeature: 'hunchback',
        stillfriends: true
    },
    {
		name: 'James',
		value: '$12',
        defFeature: 'loud scream',
        stillfriends: false
    },
    {
		name: 'Fred',
		value: '$67',
        defFeature: 'Scooby-Doo name',
        stillfriends: true
    },
    {
		name: 'Randy',
		value: '$94',
        defFeature: 'never has matching socks',
        stillfriends: true
    },
    {
		name: 'Roulie',
		value: '$35',
        defFeature: 'likes pasta... alot',
        stillfriends: false
    },
    {
		name: 'Anton',
		value: '$27',
        defFeature: 'as cookie cutter a person as ever',
        stillfriends: false
    },
    {
		name: 'Vassili',
		value: '$1234',
        defFeature: 'Russian ',
        stillfriends: true
	}	
]



function outPut() 
{
	//Loop through array and print out statements
    for(i = 0; i < FIDH.length; i++) 
    {
        if(FIDH[i].stillfriends === true) 
        {
			console.log(FIDH[i].name);
        } 
        else 
        {
			console.log(FIDH[i].name + "kill them");
		}
	}
}