alert ("Welcome to matthews book of friends and enimies")
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
        defFeature: 'Russian',
        stillfriends: true
	}	
]

var newFriend = {name:"", value:"", defFeature:"", stillfriends:""};

//the functions of the site

function printAll() 
{
    var friendInfoAllMain = document.createElement("div");
    friendInfoAllMain.innerHTML = "oh beans"
    friendInfoAllMain.id = "mainAll";
    document.body.appendChild(friendInfoAllMain);
    for(i = 0; i < FIDH.length; i++) 
    {


        if(FIDH[i].stillfriends === true) 
        {
			var friendInfoAll = document.createElement("div");
            friendInfoAll.innerHTML = FIDH[i].name;
            friendInfoAll.id = "infoAllPerson" + i;
            document.getElementById("mainAll").appendChild(friendInfoAll);
        } 
        else 
        {
            var friendInfoAll = document.createElement("div");
            friendInfoAll.innerHTML = FIDH[i].name + " Ended";
            friendInfoAll.id = "infoAllPerson" + i;
            document.getElementById("mainAll").appendChild(friendInfoAll);
		}
    }

}
function deleteAll() 
{
    var delAll = document.getElementById("mainAll");
    delAll.parentNode.removeChild(delAll);
}






function findFriend()
{
    var frenName = prompt ("What is the friends name?");



    var searchFriend = document.createElement("div");
    searchFriend.innerHTML = "oh beans2"
    searchFriend.id = "sFriendMain";
    document.body.appendChild(searchFriend);

    for(i = 0; i < FIDH.length; i++) 
    {
        if(FIDH[i].name == frenName) 
        {
            var divv = document.createElement("div");
            divv.innerHTML = FIDH.name;
            divv.id = "findFriend";
            document.getElementById("sFriendMain").appendChild(divv);
        }
    }
}
function deleteFriendFind() 
{
    var delAll = document.getElementById("sFriendMain");
    delAll.parentNode.removeChild(delAll);
}




//the adding function
function adder()
{
    var tempBool = prompt("1 for friend 2 for foe");

    if (tempBool == 1)
    {
        sFriend = true
    }
    else
    {
        sFriend = false
    }

    var temp=
    {
    name: prompt ("what is the name of this \"friend\""),
    value: prompt ("what is this persons value"),
    defFeature: prompt ("what is the definig feature of this person"),
    stillfriends: sFriend
    };

   
    FIDH.unshift(temp);
}