<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Http\Controllers\GmailController;

class FetchGmailEmails extends Command
{
    protected $signature = 'gmail:fetch-emails';
    protected $description = 'Fetch new emails from Gmail and store them in the database';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $gmailController = new GmailController();
        $gmailController->fetchEmails();

        $this->info('Emails fetched successfully.');
    }
}
