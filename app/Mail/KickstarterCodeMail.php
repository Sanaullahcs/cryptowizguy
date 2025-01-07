<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class KickstarterCodeMail extends Mailable
{
    use Queueable, SerializesModels;

    public $kickstarterCode;

    public function __construct($kickstarterCode)
    {
        $this->kickstarterCode = $kickstarterCode;
    }

    public function build()
    {
        return $this->view('emails.kickstarter_code')->with(['code' => $this->kickstarterCode]);
    }
}
