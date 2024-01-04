$(document).on('ready', function () {
    if (/^\w+?\.github\.io/i.test(window.location.hostname)) {
        console.log('HOST1=' + window.location.hostname);
    } else {
        console.log('HOST0=' + window.location.hostname);
    }
    tinymce.init({
        selector: '#my-text',
        //themes: "modern",
        skin_url: 'https://cdn.jsdelivr.net/gh/bi1101/TinyMCE-Skins@latest/light',
        //inline: true,
        //icons: 'material',
        menubar: false,
        toolbar: 'formatselect | undo redo | bold italic strikethrough bullist',
        height: 700,
        // lt_debug: '5', // TODO: Change to "0" (none) in production
        lt_url: 'https://api.languagetoolplus.com/v2/check',
        lt_debug: '0',
        lt_lang: 'en-US',
        lt_mode: 'new_word',
        lt_highlight_click: 'left',
        lt_full_message: 'true',
        lt_timer: '10',
        lt_viewport_process: "disabled",
        lt_size_of_instances: "60000",
        lt_postdata: {
            username: "a.floresca@gmail.com",
            apiKey: "DqKky6eLL6P81fLW"
        },
        plugins: ['code paste'],
        external_plugins: {
            languagetool: '/languagetool/plugin.min.js',
        },
        setup: function (editor) {
            editor.on('init', function () {
                // This function is called when the editor is fully initialized
                // Now trigger the grammar check
                editor.execCommand('mceLTProcess');
            });
        }
    });
});

$(document).on('click', '#findHid0', function () {
    console.log('Process Manual button clicked.');

    var editor = tinymce.get('my-text');

    // Find the element with data-hid="0"
    var elements = editor.dom.select('[data-hid="0"]');

    if (elements.length > 0) {
        editor.dom.addClass(elements[0], 'dialog-highlight');
        console.log('Added dialog-highlight class to the element with data-hid="0".');
    } else {
        console.log('No element found with data-hid="0".');
    }
});
