const dailyFrame = document.getElementById('daily');
const weeklyFrame = document.getElementById('weekly');
const monthlyFrame = document.getElementById('monthly');

const current = document.querySelectorAll('.hours p:nth-child(1)')
const previous = document.querySelectorAll('.hours p:nth-child(2)')


async function getData() {
    const url = './data.json';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }

  let fetchedData = [];


getData().then(result => {

    fetchedData = result;
})



dailyFrame.addEventListener('click' , () =>{

    fetchedData.forEach((dataItem , index) => {
        if(current[index]){
            current[index].textContent = `${dataItem.timeframes.daily.current}hrs`;
        }
        if(previous[index]){
            previous[index].textContent = `Yesterday - ${dataItem.timeframes.daily.previous}hrs`;
        }
    })
  })


  weeklyFrame.addEventListener('click' , () =>{

    fetchedData.forEach((dataItem , index) => {
        if(current[index]){
            current[index].textContent = `${dataItem.timeframes.weekly.current}hrs`;
        }
        if(previous[index]){
            previous[index].textContent = `Last Week - ${dataItem.timeframes.weekly.previous}hrs`;
        }
    })
  })

  monthlyFrame.addEventListener('click' , () =>{

    fetchedData.forEach((dataItem , index) => {
        if(current[index]){
            current[index].textContent = `${dataItem.timeframes.monthly.current}hrs`;
        }
        if(previous[index]){
            previous[index].textContent = `Last Month - ${dataItem.timeframes.monthly.previous}hrs`;
        }
    })
  })

