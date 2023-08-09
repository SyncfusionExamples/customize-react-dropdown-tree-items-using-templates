import { DropDownTreeComponent } from '@syncfusion/ej2-react-dropdowns';
import './App.css';
function App() {
 
    let localData : Object[] = [
      { id: 1, name: 'Laura Callahan', eimg: '4', job: 'General Manager', subChild: true, expanded: true },
      { id: 2, pid: 1, name: 'Nancy Davolio', eimg: '1', job: 'Team Lead', subChild: true, expanded: true  },
      { id: 3, pid: 2, name: 'Andrew Fuller', eimg: '7', job: 'Product Manager', subChild: true, expanded: true},
      { id: 4, pid: 3, name: 'Anne Dodsworth', eimg: '2', job: 'Developer'},
      { id: 5, pid: 2, name: 'Michael Suyama', eimg: '6', job: 'Team Lead', subChild: true, expanded: true},
      { id: 6, pid: 5, name: 'Robert King', eimg: '8', job: 'Developer' },
      { id: 7, pid: 5, name: 'Mary', eimg: '5', job: 'Developer' },
      { id: 8, pid: 1, name: 'Janet Leverling', eimg: '3', job: 'HR' }
    ];
   let datasourceFields :  Object = {
      dataSource: localData, 
      parentValue: 'pid', 
      value: 'id', 
      text: 'name', 
      hasChildren: 'subChild'
    };
    const itemTemplate=(data:any)=>{
      return(
      <div>
        <img className="eimage" src={"https://ej2.syncfusion.com/react/demos/src/images/employees/"+data['eimg']+".png"} alt={data.eimg} />
        <div>
            <div className="ename">{data.name}</div>
            <div className="ejob">{data.job}</div> 
        </div>
        </div>
      );
    }
    const headerTemplate=():JSX.Element=>{
      return(
        <div className='header'>Employee List</div>
      );
    }
    const footerTemplate=():JSX.Element=>{
      return(
        <div className='footer'>
      <span>Total list items: 8</span>
    </div>
      );
    }
    // function noRecordsTemplate(data: any): JSX.Element {
    //   return (
    //   <div className='norecord'>
    //    <span>No Data Available</span>
    //      </div>)
    // }

  return (
    <div className="App">
      <DropDownTreeComponent fields={datasourceFields} placeholder='Select an Employee' 
      itemTemplate={itemTemplate} cssClass="ddt-template"  headerTemplate={headerTemplate}
       footerTemplate={footerTemplate} showCheckBox={true} mode='Custom' customTemplate='${value.length} item(s) selected'
       treeSettings={{autoCheck:true}} //noRecordsTemplate={noRecordsTemplate}
       popupHeight='350px' popupWidth='300px'>
      </DropDownTreeComponent>
    </div>
  );
}
export default App;
