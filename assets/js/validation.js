//Ai làm validate form thì nhớ thêm scss .error là border có màu đỏ
const MIN_LENGHT = 1;
const MAX_LENGTH = 255;

//biến lưu thông tin các trường của validation
let validationFields = [];

const validation = { 

	//Hàm init là hàm khởi tạo ban đầu, tham số truyền vào là 1 array chứa thông tin
	//VD: [{
	//		selector: '.name' -> selector của thẻ input
	//		name: 'name' -> name của thẻ input
	//		type: 'text' -> type của thẻ input
	//		min: 1 -> độ dài tối thiểu ( nếu không nhập mặc định là 1 )
	//		max: 32 -> độ dài tối đa nếu có	( nếu không nhập mặc định là 255 )
	//	}]

	init: function (fields) {
		validationFields = fields;
		this.generate();
	},
	generate: function () {
		//Lặp qua tất cả các trường cần validation
		for ( const field of validationFields ) {
			//Tạo biến fieldElement để lưu element từ selector được truyền vào
			const fieldElement = this.getElement(field.selector);
			//Lắng nghe sự kiện focus
			fieldElement.onfocus = function () {
				//Xóa bỏ class error ra khỏi element
				this.classList.remove('error');
			}
			//this tại đây đại diện cho object validation nhưng nếu để trong function khi blur thì nó là đại diện cho fieldElement
			//Cho nên gán that = this để giữ lại object validation để thực hiện function
			const that = this;
			//Lắng nghe sự kiện blur
			fieldElement.onblur = function () {
				//this tại đây đại diện cho fieldElement chứ không còn đại diện cho object validation nữa
				that.checkFieldError(field);
			}

			//Tạo nội dung 'Tooltip' cho mỗi trường input
			const messageWrap = document.createElement('p');
			messageWrap.className = 'input__message';

			//Tạo nội dung cho message
			const message = this.getMessage(field);
			const messageNode = document.createTextNode(message);

			//Đưa message vào trong messageWrap
			messageWrap.appendChild(messageNode);

			//Đưa messageWrap vào trong HTML cùng cấp với thẻ input 
			fieldElement.parentElement.appendChild(messageWrap);
		}
	},

	//Hàm checkAllError có nhiệm vụ check tàon bộ các trường
	checkAllError: function () {
		let isError = false;

		//Duyệt qua các trường cần validation
		for ( const field of validationFields ) {
			//Nếu hàm checkFieldError trả về true thì isError = true -> là có lỗi
			this.checkFieldError(field) && (isError == true);
		}

		//Chỉ cần 1 trường có lỗi là sẽ trả về true
		//Nếu không trường nào có lỗi thì trả về false
		return isError;
	},

	//Hàm checkFieldError có nhiệm vụ kiểm tra cụ thể từng trường
	checkFieldError: function (field) {
		const fieldElement = this.getElement(field.selector);
		const valid = this[field.type](fieldElement.value, field.min, field.max);

		//Kiểm tra lỗi, valid là hợp lệ còn !valid là không hợp lệ
		if ( !valid ) {
			fieldElement.classList.add('error');
			//Trả về true khi có lỗi
			return true;
		}

		fieldElement.classList.remove('error');
		//Trả về false khi không có lỗi
		return false;
	},

	//Hàm kiểm tra có lỗi gì hay không
	noError: function () {
		const haveError = this.checkAllError();
		//Hàm checkAllError trả về true khi có lỗi còn hàm noError trả về false khi có lỗi nên phải dùng !haveError
		//Để trả về đúng kiểu boolean cho hàm noError
		return !haveError;
	},

	//Validate kiểu text
	text: function (value, min = MIN_LENGHT, max = MAX_LENGTH) {
		const length = value.length;
		return length >= min && length <= max;
	},

	//Validate kiểu number
	number: function (value, min = MIN_LENGHT, max = MAX_LENGTH) {
		//!!value để trả về kiểu boolean để kiểm tra 
		//isNaN sẽ trả về false nếu là số nên !isNaN sẽ trả về true khi là số
		const isNumber = !!value && !isNaN(value);
		const length = value.length;
		return isNumber && length >= min && length <= max;
	},

	//Validate kiểu email
	email: function (value) {
		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  		return re.test(value);
	},

	//Validate kiểu password
	password: function (value) {

	    // (?=.*\d)           should contain at least one digit
	    // (?=.*[a-z])        should contain at least one lower case
	    // (?=.*[A-Z])        should contain at least one upper case
	    // [a-zA-Z0-9]{8,}    should contain at least 8 from the mentioned characters

		const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
		return re.test(value);
	},

	//Hàm getMessage có nhiệm vụ trả về thông báo cho từng input
	getMessage: function (field) {
		let message = 'Enter your' + field.name;
		switch ( field.type ) {
			case 'number':
				message += ', number only';
				break;
			case 'email':
				message += ', @yahoo is not allowed';
				break;
			case 'password':
				message += ', at least 8 characters and should contain at least one digit, one lower case, one upper case';
				break;
			default:
				break;	
		}
		if ( field.min ) {
			message += ', minimum ' + field.min + ' charators';
		}
		if ( field.max ) {
			message += ', maximum ' + field.max + ' charators';
		}
		return message;
	},

	//Hàm getElement có nhiệm vụ lấy selector
	getElement: function (selector) {
		const element = document.querySelector(selector);
		return element;
	}
}

