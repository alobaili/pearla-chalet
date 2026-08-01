const form = document.getElementById('booking-form');
const errorMessage = document.getElementById('form-error');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const requiredFields = [...form.querySelectorAll('input[required]')];
  const isValid = form.checkValidity();
  requiredFields.forEach((field) => field.classList.toggle('invalid', !field.validity.valid));

  if (!isValid) {
    errorMessage.textContent = 'يرجى تعبئة جميع الحقول والموافقة على شروط العقد.';
    form.querySelector(':invalid').focus();
    return;
  }

  errorMessage.textContent = '';
  const value = (name) => form.elements[name].value.trim();
  const message = `السلام عليكم،\n\nأقر أنا بما يلي:\n\nالاسم:\n${value('name')}\nرقم الهوية:\n${value('national-id')}\nرقم الجوال:\n${value('phone')}\nقيمة الإيجار:\n${value('rental-value')}\nتاريخ الحجز:\n${value('booking-date')}\n\nوأقر بأنني قرأت ووافقت على جميع شروط عقد شاليه بيرلا.`;

  window.location.href = `https://wa.me/?text=${encodeURIComponent(message)}`;
});

form.querySelectorAll('input').forEach((field) => {
  field.addEventListener('input', () => field.classList.remove('invalid'));
  field.addEventListener('change', () => field.classList.remove('invalid'));
});
