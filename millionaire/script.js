const question = ['Кому закон не писаний?', 'Що означає молодіжне слово "чілити"?','Ким вам доводиться син доньки матері вашого батька?','Згідно грецькій міфології, що траплялось з тим, хто подивиться на Медузу Горгону?','Якого кольору "чорна скринька" у літаку?','Який гібридний вид спорту у 2003 році популяризував голландець Іпе Рубінг, який і став першим чемпіоном світу з цього змагання?','Назвіть українську печеру, яка є найдовшою у Євразії?','Як в народі називають сир чечил?','Скільки світових рекордів встановив український стрибун із жердиною Сергій Бубка?','У якому місті 1932 року було проведено перший міжнародний кінофестиваль?','Хто першим отримав Нобелівську премію з літератури?','Який хімічний елемент названо на честь злого підземного гнома?','Який продукт у Франції називають батьковою бородою, а у Греції - бабусиним волоссям?','Скільки каратів у чистому золоті?','Як називається число, що складається з одиниці та ста нулів?'];
const answer = ['Розумним','Дурням','Депутатам','Тещам', 'Їсти перець','Танцювати','Відпочивати','Їхати до Чилі','Двоюрідним братом','Дядьком','Племінником','Онуком','Ставав невидимим','Перетворювався на каміння','Перетворювався на попіл','Починав розуміти зміїну мову','Чорного','Білого','Помаранчевого','Жовтого', 'Каратебол','Дзюдопокер','Шахбокс','Шашкобіг', 'Солдатська','Оптимістична','Незалежна','Мармурова','Ковбасний','Плавлений','Косичка','З пліснявою', '10','15','25','35', 'Канни','Венеція','Париж','Берлін','Романіст','Драматург','Поет','Есеїст','Гафній','Кобальт','Берилій','Теллур','Морква по-корейськи','Спагетті','Пахлава','Цукрова вата', '100','24','68','10', 'Мегатрон','Наномоль','Гугол','Гігабіт'];
const key = [1, 2, 0, 1, 2, 2, 1, 2, 3, 1, 2, 1, 3, 1, 2];
let level = 0;
let name = 'name';	
let username = readCookie(name);
if (username != null) 
{	
	$('.start').css('display', 'none');
	$('.reStart').css('display', 'block');
	$('#startGame').click(function(){
		$('.reStart').css('display', 'none');
		setTimeout(timer,1000);
	});
}
function show(level) {
	$('.question').text( question[level] );
	$('label[for=answer1]').text( answer[level*4+0] );
	$('label[for=answer2]').text( answer[level*4+1] );
	$('label[for=answer3]').text( answer[level*4+2] );
	$('label[for=answer4]').text( answer[level*4+3] );
}
let resultConst = [];		
show(level);
let tr = $('tr'); 
$(tr[tr.length - (level + 1)]).css('background','#ffd800');
$('.btn').click(function(){
	$("#timer_inp").text(60);
	if( $('input[name=answer]:checked').val() == key[level] )
	{
		level++;
		show(level);
	}
	else{gameOwer()}	
	$('input').prop('checked', false);
	$(tr.css('background','#fff'));
	$(tr.removeClass('result'));
	$(tr[tr.length - (level + 1)]).css('background','#ffd800');
	$(tr[tr.length - (level)]).css('color','#e32636');
	$(tr[tr.length - (level)]).addClass('result');
	$('label').css('color', '#000000');
	if (level == 5 || level == 10 || level == 15) 
	{
		 resultConst.push($(tr[tr.length - (level)]).addClass('resultConst'));
	}
})
Math.rand = function(min, max){
	return Math.round(Math.random() * (max-min) + min);
}
let inputLabel = document.getElementsByTagName('label');
$('.round50').click(function(){
let inputAnswer = document.getElementsByName('answer');
let exp = [];	
let count = 0;
	while(count < 2) {
		let index = Math.rand(0,3);
		if (exp.indexOf(index) == -1 && $(inputAnswer[index]).val() != key[level] ) 
		{
			$(inputLabel[index]).css('color', '#ffd800');
			count++;
			exp.push(index);
		}
	}
		$(this).off('click');
		$(this).css('background', '#ffd800');
})	 
$('.round').click(function(){	
		$(inputLabel[Math.rand(0,3)]).css('color', '#ffd800'),
		$(this).off('click');
		$(this).css('background', '#ffd800');		
})
const result = $('.result'); 
$('.roundEnd').click(function(){
	end();
})
function end() {
	$('.end').css('display', 'block');
	if (tr.hasClass('result')) 
	{
		const tdResult = $("tr.result").children();
		const tdText = tdResult[1].textContent;	
		$('.showResult').text('Ви виграли: ' + tdText + ' гривень');
	}
}
function gameOwer() {
	$('.end').css('display', 'block');
	if (tr.hasClass('resultConst')) 
	{
		const tdResult1 = $(resultConst[resultConst.length - 1]).children();
		const tdText1 = tdResult1[1].textContent;
		$('.showResult').text('Ви виграли: ' + tdText1 + ' гривень');
	}
}
function timer(){
	 const objTimer=document.getElementById('timer_inp');
	 objTimer.innerHTML--;
  	 if(objTimer.innerHTML==5)
	 	{
	 	$('#timer_inp').css('background', 'red');
	 	}
	 if(objTimer.innerHTML==0)
		{
	 	setTimeout(function(){},1000);
	 	gameOwer();
		}
	 else{setTimeout(timer,1000)}
}
$('form').submit(function(e){ 
		e.preventDefault()	
});
$('#start').click(function(){
	if ($('#user').val() != '') 
	{
		$('.start').css('display', 'none');
		setTimeout(timer,1000);
	}
	else
	{
		$('#user').css('background', '#f30')
	}	
	let value = $('#user').val();
	createCookie(name, value, 1);
});
function createCookie(name, value, days) {
    if (days) 
    {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 *1000));
        let expires = "; expires=" + date.toGMTString();
    }
    else 
    {
        let expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
        	let value = c.substring(nameEQ.length,c.length);
            return value.split(",");
        }
    }
    return null;
}
