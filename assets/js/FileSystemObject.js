
var fso, fldr, s = ""; 
// 建立FileSystemObject物件例項 
fso = new ActiveXObject("Scripting.FileSystemObject"); 
// 獲取Drive 物件 
fldr = fso.GetFolder("c:\\"); 
// 顯示父目錄名稱 
alert("Parent folder name is: "   fldr   "\n"); 
// 顯示所在drive名稱 
alert("Contained on drive "   fldr.Drive   "\n"); 
// 判斷是否為根目錄 
if (fldr.IsRootFolder) 
alert("This is the root folder."); 
else 
alert("This folder isn't a root folder."); 
alert("\n\n"); 
// 建立新資料夾 
fso.CreateFolder ("C:\\Bogus"); 
alert("Created folder C:\\Bogus"   "\n"); 
// 顯示資料夾基礎名稱，不包含路徑名 
alert("Basename = "   fso.GetBaseName("c:\\bogus")   "\n"); 
