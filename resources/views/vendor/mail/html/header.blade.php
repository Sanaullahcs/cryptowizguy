@props(['url'])
<tr>
    <td class="header">
        <a href="{{ $url }}" style="display: inline-block;">
            @if (trim($slot) === 'Laravel')
            <img src="https://test.cryptowizguy.com/logo.png" class="logo" alt="{{config('app.name')}}">
            @else
            {{ $slot }}
            @endif
        </a>
    </td>
</tr>